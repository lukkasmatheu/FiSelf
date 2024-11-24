import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { BasicDetailsProduct } from "./steps/basicDetailsProduct";
import { CategoryProduct } from "./steps/categoryProduct";
import { AdvancedeDetailsProduct } from "./steps/advancedeDetailsProduct";

import { Stack } from "expo-router";
import { Logo } from "../../../../components/Logo";
import { Button } from "../../../../components/Button";

export interface Product {
  validadeData?: string;
  minQuantidade?: string;
  codigoBarras?: string;
  nome: string;
  precoVenda: string;
  precoCompra: string;
  categoria: string;
  imagem: string;
  quantidade: string;
}

const RegisterProduct = () => {
  const [product, setProduct] = useState<Product>({
    nome: "",
    precoVenda: "",
    precoCompra: "",
    quantidade: "",
    categoria: "",
    imagem: "",
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRegisterProduct = () => {
    if (
      product.nome === "" ||
      product.precoVenda === "" ||
      product.precoCompra === "" ||
      product.categoria === "" ||
      product.imagem === ""
    ) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    // Ação de cadastro (apenas exemplo)
    Alert.alert(
      "Produto Cadastrado",
      `Nome: ${product.nome}\nPreço: R$ ${product.precoVenda}\nCategoria: ${product.categoria}`
    );
  };
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <BasicDetailsProduct product={product} setProduct={setProduct} />
        );
      case 1:
        return <CategoryProduct product={product} setProduct={setProduct} />;
      case 2:
        return (
          <AdvancedeDetailsProduct product={product} setProduct={setProduct} />
        );
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false
        }}/>
      <Logo />
      <Text style={styles.title}>Cadastro de Produto</Text>
      <View style={styles.steps}>
        {[1, 2, 3].map((step, index) => (
          <TouchableOpacity
            key={index}
            style={styles.step}
            onPress={() => setCurrentStep(index)}
          >
            <Text
              style={
                currentStep === index ? styles.activeStep : styles.inactiveStep
              }
            >
              <Entypo name="circle" size={15} />
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {renderStep()}
      <View style={styles.navigation}>
        <Button
          title="Anterior"
          onPress={handlePrev}
          disabled={currentStep === 0}
          width={100}
          color="#6C85ED"
        />
        <Button
          title={currentStep !== 2 ? "Proximo" : "Salvar"}
          onPress={currentStep !== 2 ? handleNext : handleRegisterProduct}
          disabled={currentStep === 2}
          width={100}
          color="#6C85ED"
        />
        {/* Por enquanto o botão segue desligado no ultimo step como não estou salvando a informaçao ainda */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    padding: 16,
  },
  activeStep: {
    fontWeight: "bold",
    color: "green",
  },
  inactiveStep: {
    color: "gray",
  },
  steps: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  navigation: {
    position: "absolute",
    bottom: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  step: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});


export default RegisterProduct;