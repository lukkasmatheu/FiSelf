import React, { useEffect, useState } from "react";
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
import { Input } from "../../../../../components/Input";
import useCategoryStore from "../../../../../states/useCategory";


interface ProducsProps {
  product: Product;
  setProduct: (e: any) => void;
}

interface Category {
  value: string;
}

export const CategoryProduct = ({ product, setProduct }: ProducsProps) => {

  const { categories, addCategory, loadCategories,clearCategories } = useCategoryStore();
  const [options,setOptions] = useState<Category[]>([])
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLinkVisible, setLinkVisible] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  useEffect(()  => {
    loadCategories();
  },[]);

  useEffect(()  => {
    if(categories.length > 0)
      setOptions(categories.sort().map(categoria => ({'value':categoria})))
  },[categories]);

  const takePhoto = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permissão para acessar a câmera é necessária!");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes:['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProduct({ ...product, imagem: result.assets[0].uri });
    }
  };

  const handleAddCategory = () => {
    if (newCategory.trim() === "") {
      Alert.alert("Erro", "O nome da categoria não pode ser vazio.");
      return;
    }
    if (!categories.includes(newCategory)) {
      addCategory(newCategory);
    }
    setNewCategory("");
    setModalVisible(false);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProduct({ ...product, imagem: result.assets[0].uri });
    }
  };

  return (
    <View style={styles.container}>
      <Select
        label="Categoria*"
        setSelectValue={(e) => setProduct({ ...product, categoria: e.value })}
        options={options}
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
              <Image source={{ uri: product.imagem }} style={styles.image} />
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

            <TouchableOpacity style={styles.buttonImage} onPress={() => setLinkVisible(!isLinkVisible)}>
              <Ionicons name="link-outline" size={35} />
              <Text>URL</Text>
            </TouchableOpacity>
           
          </View>
          {isLinkVisible && 
            <Input
            label="URL imagem"
              placeholder="URL da imagem"
              value={product.imagem}
              onEndEditing={()=>setLinkVisible(!isLinkVisible)}
              onChangeText={(text) => setProduct({ ...product, imagem: text})}
            />}
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Criar Nova Categoria</Text>
            <TextInput
              placeholder="Nome da Categoria"
              value={newCategory}
              onChangeText={(text) => setNewCategory(text)}
              style={styles.modalInput}
            />
            <View style={styles.modalButton}>
            <Button 
            title="Salvar Categoria" 
            color="green"
            onPress={handleAddCategory}
             />

            <Button
              title="Cancelar"
              color="red"
              onPress={() => setModalVisible(false)}
            />
            </View>
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
  image: {
    width: "100%",
    height: 200,
    marginBottom: 8,
    borderRadius: 10,
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
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Filtro de fundo escurecido
  },
  modalContainer: {
    width: "80%", // Largura ajustável
    backgroundColor: "#fff", // Cor de fundo da modal
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalButton: {
    padding: 20,
    gap:15,
    alignItems: "center",
    justifyContent: "center",
  },
  modalInput: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
    marginBottom: 10,
  },
});
