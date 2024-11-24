import {  StyleSheet, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Select } from "../../../../components/Select";
import { useState } from "react";
import { Input } from "../../../../components/Input";
import { Logo } from "../../../../components/Logo";
import { Button } from "../../../../components/Button";


 const RegisterSale = () => {
  const [selectValue,setSelectValue] = useState();
  return (
    <View style={styles.container}>

        <Stack.Screen
        options={{
          headerShown: false
        }}
      />
      <Logo/>
      <View style={styles.inputs}>
        <Select label={"Categoria"} selectedValue={selectValue} setSelectValue={setSelectValue} options={[{'value':'Eletrodomesticos'},{'value':'Informatica'},{'value':'Beleza'}]} />
        <Input label="Produto" />
        <Input label="Quantidade" />
        <Input label="Email Clinte" textContentType={"emailAddress"} />
        <Input label="CNPJ/CPF Cliente" />
      </View>
      <View style={styles.buttons}>
        <Button
          width={180}
          color="#00ff00"
          title="Salvar Venda"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  logo: {
    marginTop: 50,
    marginBottom: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputs: {
    width: "100%",
    height: "55%",
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
});

export default RegisterSale;