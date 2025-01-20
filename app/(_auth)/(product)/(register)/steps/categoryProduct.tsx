import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { Product } from "../registerProduct";
import { Select } from "../../../../../components/Select";
import { Button } from "../../../../../components/Button";
import { MediaType } from "expo-image-picker";


interface ProducsProps {
  product: Product;
  setProduct: (e: any) => void;
}

interface Category {
  value: string;
}

export const CategoryProduct = ({ product, setProduct }: ProducsProps) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [categorias, setCategorias] = useState<Category[]>([
    { value: "Informatica" },
    { value: "Beleza" },
    { value: "Eletrodomesticos" },
    { value: "Limpeza" },
    { value: "Brinquedo" },
  ]);
  const TypeImage = 'image' as MediaType;

  const takePhoto = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permissão para acessar a câmera é necessária!");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setProduct({ ...product, imagem: result.uri });
    }
  };
  const addCategory = () => {
    if (newCategory.trim() === "") {
      Alert.alert("Erro", "O nome da categoria não pode ser vazio.");
      return;
    }
    setCategorias([...categorias, { value: newCategory.trim() }]);
    setNewCategory("");
    setModalVisible(false);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: TypeImage,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProduct({ ...product, imagem: result.uri });
    }
  };

  return (
    <View style={styles.container}>
      <Select
        label="Categoria*"
        setSelectValue={(e) => setProduct({ ...product, categoria: e.value })}
        options={categorias}
        selectedValue={product["categoria"]}
      />

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.addCategory}>+ Criar Nova Categoria</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}> Imagem do Produto</Text>
        <View style={styles.imageContainer}>
          <View>
            {product.imagem ? (
              <Image source={{ uri: product.imagem }} />
            ) : (
              <View style={styles.withoutImage}>
                <Text>Nenhuma imagem selecionada</Text>
              </View>
            )}
          </View>
          <View style={styles.buttonsImage}>
            <TouchableOpacity style={styles.buttonImage} onPress={pickImage}>
              <Ionicons name="folder-outline" size={35} />
              <Text>Escolher Foto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonImage} onPress={takePhoto}>
              <Ionicons name="camera-outline" size={35} />
              <Text>Tirar Foto</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonImage} onPress={takePhoto}>
              <Ionicons name="link-outline" size={35} />
              <Text>URL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        style={styles.modalOverlay}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View>
            <Text> Criar Nova Categoria </Text>
            <TextInput
              placeholder="Nome da Categoria"
              value={newCategory}
              onChangeText={(text) => setNewCategory(text)}
            />
            <Button title="Salvar Categoria" onPress={addCategory} />
            <Button
              title="Cancelar"
              color="red"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 10,
    alignItems: "center",
  },
  withoutImage: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3d3d3d3d",
  },
  select: {
    fontSize: 16,
    marginBottom: 5,
  },
  selectItem: {
    paddingVertical: 5,
    color: "#555",
  },
  addCategory: {
    color: "#0066cc",
    textAlign: "center",
    marginBottom: 20,
  },
  imageContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  buttonsImage: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonImage: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    color: "#d3d3d3",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalContainer: {
    width: "80%", // Largura da modal ajustável
    backgroundColor: "#fff", // Cor de fundo da modal
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
});
