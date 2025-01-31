import { StyleSheet, Text, View } from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";

import { UserSchema } from "../../schemas/UserSchema";
import DatePickerField from "../../components/DatePicker";
import axios from "axios";
import moment from "moment";

export default function Register() {
  const router = useRouter();
  const [register, setRegister] = useState({
    nome: "",
    email: "",
    senha: "",
    contraSenha: "",
    telefone: "",
    birthDate: null,
    cpf: "",
  });
  const [errors, setErrors] = useState<{
    nome?: string;
    email?: string;
    senha?: string;
    contraSenha?: string;
    telefone?: string;
    cpf?: string;
  }>({});

  const handleChange = (field: keyof typeof register, value: string|Date) => {
    setRegister((prev) => ({ ...prev, [field]: value }));
  };

  const validateRegister = () => {
    try {
      console.log(register)
      const parsed = UserSchema.parse(register);
      console.log("Dados válidos:", parsed);
      axios.post('http://10.0.2.2:8080/v1/user', parsed)
      .then(success=> console.log("Usuario Cadastrado com sucesso" + success))
      .catch(error=> console.error("Error ao cadastrar novo usuario" + error.message, error));
      router.push("/login");
    } catch (error: any) {
      if (error.name === "ZodError") {
        const errorMap: typeof errors = {};
        error.errors.forEach((err: any) => {
          const field = err.path[0] as keyof typeof errors;
          errorMap[field] = err.message;
        });
        setErrors(errorMap);
      }
      console.error(error)
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.firtText}>Fi</Text>
        <Text style={styles.secondText}>Self</Text>
      </View>
      <ScrollView style={styles.scrollStyle}>
        <View style={styles.inputs}>
          <Input
            label="Nome *"
            textContentType="username"
            value={register.nome}
            maxLength={55}
            onChangeText={(value) => handleChange("nome", value)}
          />
          {errors.nome && <Text style={styles.errorText}>{errors.nome}</Text>}

          <Input
            label="Email *"
            textContentType="emailAddress"
            value={register.email}
            onChangeText={(value) => handleChange("email", value)}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          <Input
            label="Senha *"
            textContentType="password"
            secureTextEntry={true}
            value={register.senha}
            onChangeText={(value) => handleChange("senha", value)}
          />
          {errors.senha && <Text style={styles.errorText}>{errors.senha}</Text>}

          <Input
            label="Repita a senha *"
            textContentType="password"
            secureTextEntry={true}
            value={register.contraSenha}
            onChangeText={(value) => handleChange("contraSenha", value)}
          />
          {errors.contraSenha && <Text style={styles.errorText}>{errors.contraSenha}</Text>}
          
          <Input
            label="Telefone"
            textContentType="telephoneNumber"
            value={register.telefone.replace(/\D/g, "").replace(
              /(\d{2})(\d{4,5})(\d{0,4})/,
              "($1) $2-$3"
            )}
            maxLength={15}
            onChangeText={(value) => handleChange("telefone", value)}
          />
          {errors.telefone && <Text style={styles.errorText}>{errors.telefone}</Text>}

          <Input
            label="CPF"
            value={register.cpf.replace(/\D/g, "").replace(
              /(\d{3})(\d{3})(\d{3})(\d{0,2})/,
              "$1.$2.$3-$4"
            )}
            maxLength={14}
            onChangeText={(value) => handleChange("cpf", value)}
          />
          {errors.cpf && <Text style={styles.errorText}>{errors.cpf}</Text>}
          <DatePickerField 
          placeHolder={"📅 Data de Nascimento"} 
          title="Selecione sua data de nascimento"
          date={register.birthDate}
          minDate={new Date(moment().subtract(95, "years").toDate())}
          maxDate={new Date(moment().subtract(13, "years").toDate())} 
          setDate={(value) => handleChange("birthDate", value)}/>
            
        </View>
      </ScrollView>
      <View style={styles.buttons}>
        <Button
          width={335}
          radius={6}
          color="green"
          title="Salvar Cadastro"
          onPress={validateRegister}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    marginTop: 30,
    marginBottom: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollStyle: {
    flex: 1,
  },
  inputs: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttons: {
    marginTop: 10,
    marginBottom: -40,
    height: 80,
    flexDirection: "column",
    alignItems: "center",
  },
  firtText: {
    fontSize: 40,
    color: "blue",
  },
  secondText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 4,
  },
});