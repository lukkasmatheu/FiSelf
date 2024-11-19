import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, FlatList } from 'react-native';
import produtos from '../../mocks/produtos.json';
import { Logo } from '../../components/Logo';
interface ProductsProps{ 
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}

export default function Products() {

  const [produtosData, setProdutosData] = useState<ProductsProps[]>([]);

  // Carregar produtos do JSON ao montar o componente
  useEffect(() => {
    console.log(produtos)
    setProdutosData(produtos);
  }, []);

  const renderItem = ({item}:any) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.image} />
      <Text style={styles.name}>{item.nome}</Text>
      <Text style={styles.price}>R$ {item.preco?.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}> 
      <Logo />
      <Text style={styles.category}>Informatica</Text>
      <FlatList
      data={produtosData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  list:{
    paddingHorizontal: 16,
  },
  card: {
    width: 150,
    height: 150,
    backgroundColor: '#fff',
    borderWidth:2,
    borderColor:"gray",
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
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
