import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { BasicDetailsProduct } from "./steps/basicDetailsProduct";
import { CategoryProduct } from "./steps/categoryProduct";
import { AdvancedeDetailsProduct } from "./steps/advancedeDetailsProduct";

import { useRouter } from "expo-router";
import { Logo } from "../../../../components/Logo";
import { Button } from "../../../../components/Button";
import { ProductSchema } from "../../../../schemas/ProductSchema";
import useUser from "../../../../states/useUser";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import api from "../../../../api/interceptors";

import ToastManager, { Toast } from "toastify-react-native";


export type Product = {
  validadeData?: Date;
  minQuantidade?: string;
  codigoBarras: string;
  nomeProduto: string;
  precoVenda: string;
  precoCompra: string;
  categoria: string;
  imagem: string;
  quantidade: string;
  descricao: string;
};

const RegisterProduct = () => {
  const defaultState = {
    validadeData: undefined,
    minQuantidade: undefined,
    codigoBarras: "",
    nomeProduto: "",
    precoVenda: "",
    precoCompra: "",
    categoria: "",
    imagem: "",
    quantidade: "",
    descricao: "",
  }
  const userStore = useUser();
  const router = useRouter();
  const [product, setProduct] = useState<Product>(defaultState);
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      router.back();
    }
  };

  const handleRegisterProduct = () => {
    try {
      const validatedProduct = ProductSchema.parse(product);
      validatedProduct.idCompany = userStore.user?.idUser!;
      validatedProduct.idProduct = uuidv4();

      api
        .post("/v1/products", validatedProduct)
        .then(() => {
          Toast.success("cadastrado com sucesso");
          setProduct(defaultState);
          router.push("/(_auth)/(product)/products");
        })
        .catch((e) => Toast.error("Error ao salvar produto" + e.message));
    } catch (error: any) {
      if (error.name === "ZodError") {
        Alert.alert(
          "Erro de Validação",
          error.errors.map((e: any) => e.message).join("\n")
        );
      }
    }
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
      <Logo />
      <ToastManager height={90} width={260} style={styles.toast}/>
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
          title={currentStep !== 0 ? "Anterior" : "Voltar"}
          onPress={handlePrev}
          disabled={currentStep === 0}
          width={150}
          radius={5}
          color="#0000003f"
        />
        <Button
          title={currentStep !== 2 ? "Proximo" : "Salvar"}
          onPress={currentStep !== 2 ? handleNext : handleRegisterProduct}
          width={150}
          radius={5}
          color="#23cf5c"
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
    marginLeft: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  step: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  toast: {
    position: "absolute",
    top:75,
    right: 0,
    zIndex:999
  },
});

export default RegisterProduct;
