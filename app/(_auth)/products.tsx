import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import categorias from '../../mocks/produtos.json';
import { Logo } from '../../components/Logo';

interface Product {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}

interface Category {
  categoria: string;
  produtos: Product[];
}

export default function Products() {
  const [produtosData, setProdutosData] = useState<Category[]>([]);

  useEffect(() => {
    setProdutosData(categorias);
  }, []);

  const renderCategory = (category: Category) => (
    <View key={category.categoria} style={styles.categoryContainer}>
      <Text style={styles.category}>{category.categoria}</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >
        {category.produtos.map((product) => (
          <View key={product.id} style={styles.card}>
            <Image source={{ uri: product.imagem }} style={styles.image} />
            <Text style={styles.name}>{product.nome}</Text>
            <Text style={styles.price}>R$ {product.preco?.toFixed(2)}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Logo />
      {produtosData.map((category) => renderCategory(category))}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  list: {
    paddingHorizontal: 16,
  },
  categoryContainer: {
    marginBottom: 24, // Espaço entre as categorias
  },
  card: {
    width: 150,
    height: 150,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 10,
    marginRight: 16,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 8,
    borderRadius: 10,
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 14,
    color: 'gray',
  },
});
