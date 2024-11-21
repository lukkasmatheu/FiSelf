import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Modal, ScrollView, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

interface Category {
  categoria: string;
}

interface Product {
  nome: string;
  preco: string;
  categoria: string;
  imagem: string;
}

export default function ProductRegistration() {
  // Lista de categorias iniciais do mock
  const [categorias, setCategorias] = useState<Category[]>([
    { categoria: 'informatica' },
    { categoria: 'beleza' },
  ]);

  // Estados para os campos do formulário
  const [product, setProduct] = useState<Product>({
    nome: '',
    preco: '',
    categoria: '',
    imagem: '',
  });

  // Estado para a modal de categoria
  const [isModalVisible, setModalVisible] = useState(false);
  const [newCategory, setNewCategory] = useState('');

  // Função para adicionar uma nova categoria
  const addCategory = () => {
    if (newCategory.trim() === '') {
      Alert.alert('Erro', 'O nome da categoria não pode ser vazio.');
      return;
    }
    setCategorias([...categorias, { categoria: newCategory.trim() }]);
    setNewCategory('');
    setModalVisible(false);
  };

  // Função para escolher a imagem
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setProduct({ ...product, imagem: result.uri });
    }
  };

  // Função para manusear o cadastro do produto
  const handleRegisterProduct = () => {
    // Verificar se todos os campos estão preenchidos
    if (product.nome === '' || product.preco === '' || product.categoria === '' || product.imagem === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Ação de cadastro (apenas exemplo)
    Alert.alert('Produto Cadastrado', `Nome: ${product.nome}\nPreço: R$ ${product.preco}\nCategoria: ${product.categoria}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Cadastro de Produto</Text>

      {/* Campo de Nome */}
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={product.nome}
        onChangeText={(text) => setProduct({ ...product, nome: text })}
      />

      {/* Campo de Preço */}
      <TextInput
        style={styles.input}
        placeholder="Preço"
        keyboardType="numeric"
        value={product.preco}
        onChangeText={(text) => setProduct({ ...product, preco: text })}
      />

      {/* Campo de Categoria */}
      <Text style={styles.label}>Categoria</Text>
      <View style={styles.selectContainer}>
        <TextInput
          style={styles.select}
          placeholder="Selecione uma categoria"
          value={product.categoria}
          onChangeText={(text) => setProduct({ ...product, categoria: text })}
        />
        {categorias.map((cat, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setProduct({ ...product, categoria: cat.categoria })}
          >
            <Text style={styles.selectItem}>{cat.categoria}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      {/* Link para abrir modal de nova categoria */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.addCategory}>+ Criar Nova Categoria</Text>
      </TouchableOpacity>

      {/* Campo de Imagem */}
      <Text style={styles.label}>Imagem do Produto</Text>
      <View style={styles.imageContainer}>
        {product.imagem ? (
          <Image source={{ uri: product.imagem }} style={styles.image} />
        ) : (
          <Text>Nenhuma imagem selecionada</Text>
        )}
      </View>
      <Button title="Escolher Imagem do Dispositivo" onPress={pickImage} />
      <TextInput
        style={styles.input}
        placeholder="Ou cole a URL da imagem"
        value={product.imagem}
        onChangeText={(text) => setProduct({ ...product, imagem: text })}
      />

      {/* Botão de Cadastro */}
      <Button title="Cadastrar Produto" onPress={handleRegisterProduct} />

      {/* Modal para criar nova categoria */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Criar Nova Categoria</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome da Categoria"
              value={newCategory}
              onChangeText={(text) => setNewCategory(text)}
            />
            <Button title="Salvar Categoria" onPress={addCategory} />
            <Button title="Cancelar" color="red" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  selectContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  select: {
    fontSize: 16,
    marginBottom: 5,
  },
  selectItem: {
    paddingVertical: 5,
    color: '#555',
  },
  addCategory: {
    color: '#0066cc',
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
