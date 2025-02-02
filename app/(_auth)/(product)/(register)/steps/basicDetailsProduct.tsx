import { View, StyleSheet, ScrollView } from "react-native";

import { Product } from "../registerProduct";
import { Input } from "../../../../../components/Input";
import { formatToBRL } from "../../../../../utils/utils";

interface ProducsProps {
  product: Product;
  setProduct: (e: any) => void;
}

export const BasicDetailsProduct = ({ product, setProduct }: ProducsProps) => (
  <ScrollView style={styles.scrollStyle}>
    <View style={styles.container}>
      <Input
        label="Nome do produto"
        placeholder="Nome do Produto"
        textContentType={"name"}
        value={product.nomeProduto}
        onChangeText={(text) => setProduct({ ...product, nomeProduto: text })}
      />

      <Input
        label="Preço de Compra/Produção"
        placeholder="Custo do produto"
        keyboardType="numeric"
        value={formatToBRL(product.precoVenda)}
        onChangeText={(text) => setProduct({ ...product, precoVenda: text })}
      />

      <Input
        label="Preço de Venda"
        placeholder="Preço de venda"
        keyboardType="numeric"
        value={formatToBRL(product.precoCompra)}
        onChangeText={(text) => setProduct({ ...product, precoCompra: text })}
      />

      <Input
        label="Quantidade"
        placeholder="Quantidade"
        keyboardType="numeric"
        value={product.quantidade}
        onChangeText={(text) => setProduct({ ...product, quantidade: text })}
      />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 20,
    marginBottom:50,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  scrollStyle:
  {flex:1}
});
