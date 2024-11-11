import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, FlatList } from 'react-native';
import produtos from '../../mocks/produtos.json';

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
    {/* TODO componetizar Logo [criar logo pequena a esquerda/logo central/logo roda pé] */}
      <View style={styles.logo}> 
        <Text style={styles.firtText}>Fi</Text>
        <Text style={styles.secondText}>Self</Text>
      </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom:80,
    backgroundColor: '#fff',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firtText:{
    // fontFamily:'sans serif',
    fontSize:40,
    color:'blue'
  },
  secondText:{
    // fontFamily:'sans serif',
    fontSize:40,
    fontWeight:"bold"
  },
  list: {
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
