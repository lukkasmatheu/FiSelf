import { StyleSheet, Text, View } from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useRouter } from "expo-router";
import { LoginSchema } from '../../schemas/ILogin';
import { useEffect, useState } from "react";
import useUser from "../../states/useUser";

import api from "../../api/interceptors";

export default function Login() {
  const router = useRouter();
  const userStore = useUser();
  const [login,setLogin] = useState<LoginSchema>()
  const [error, setError] = useState<{ email?: string; senha?: string }>({});
  const navigate = (route: string) => {
    router.push("/" + route);
  };
  
  useEffect(() => {
    if (userStore.accessToken && userStore.refreshToken) {
      router.replace("/(_auth)/dashboard");
    } 
  }, []);
  const validateLogin = () =>{
    try{
      const validLogin = LoginSchema.parse(login)
      api.post('/v1/user/login',validLogin)
      .then((user)=> {

        const { accessToken, refreshToken ,...userData } = user.data;

        userStore.setAccessToken(accessToken);
        userStore.setRefreshToken(refreshToken);
        userStore.setUser(userData);
        navigate("(_auth)/dashboard")
      })
      .catch(erro => console.error("Erro ao realizar o Login.",erro))
    }catch (except : any) {
      if (except.name === "ZodError") {
        const errorMap: { email?: string; senha?: string } = {};
        errorMap.email = except.format().email?._errors;
        errorMap.senha = except.format().senha?._errors;
        setError(errorMap);
      }
  }}

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.firtText}>Fi</Text>
        <Text style={styles.secondText}>Self</Text>
      </View>
      <View style={styles.inputs}>
        <Input label="Email"
         textContentType={"emailAddress"}
         onChangeText={ email => setLogin({password: login?.password ?? '',email:email})}
        />
          {error.email && <Text style={styles.errorText}>{error.email}</Text>}

        <Input
          label="Senha"
          textContentType={"password"}
          secureTextEntry={true}
          onChangeText={ senha => setLogin({password: senha ,email:login?.email ?? ''})}
        
        />
          {error.senha && <Text style={styles.errorText}>{error.senha}</Text>}
      
      </View>
      <View style={styles.buttons}>
        <Button
          width={180}
          title="Entrar"
          onPress={validateLogin}
        />
        <Button
          width={180}
          title="Cadastro"
          onPress={() => navigate("register")}
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
    marginTop: 50,
    marginBottom: 80,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputs: {
    width: "100%",
    height: 200,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttons: {
    height: 80,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  firtText: {
    // fontFamily:'sans serif',
    fontSize: 40,
    color: "blue",
  },
  secondText: {
    // fontFamily:'sans serif',
    fontSize: 40,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 4,
  },
});
