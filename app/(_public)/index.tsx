import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/Button";
import { useRouter } from "expo-router";
import React from "react";
import { Logo } from "../../components/Logo";

const Welcome = () => {
  const router = useRouter();
  const navigate = (route: string) => {
    router.push("/" + route);
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text>Seja bem vindo ao seu app pessoal de finanças</Text>
      <View style={styles.buttons}>
        <Button title="Login" onPress={() => navigate("login")} />
        <Button title="Cadastro" onPress={() => navigate("register")} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginBottom: 80,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
<<<<<<< HEAD

=======
  
>>>>>>> 632f2c503b7fc40d3301ef0c5b2e16c7b6f2ebd4
  buttons: {
    height: 120,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
  },
<<<<<<< HEAD
=======

>>>>>>> 632f2c503b7fc40d3301ef0c5b2e16c7b6f2ebd4
});


export default Welcome;