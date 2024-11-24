import { View, StyleSheet } from "react-native";

import { Product } from "../registerProduct";
import { Input } from "../../../../../components/Input";

interface ProducsProps {
  product: Product;
  setProduct: (e: any) => void;
}

export const BasicDetailsProduct = ({ product, setProduct }: ProducsProps) => (
  <View style={styles.container}>
    <Input
      label="Nome do produto"
      placeholder="Nome do Produto"
      textContentType={"emailAddress"}
      value={product.nome}
      onChangeText={(text) => setProduct({ ...product, nome: text })}
    />

    <Input
      label="Preço de Compra"
      placeholder="Preço"
      keyboardType="numeric"
      value={product.precoVenda}
      onChangeText={(text) => setProduct({ ...product, precoVenda: text })}
    />

    <Input
      label="Preço de Venda"
      placeholder="Preço"
      keyboardType="numeric"
      value={product.precoCompra}
      onChangeText={(text) => setProduct({ ...product, precoCompra: text })}
    />

    <Input
      label="Quantidade"
      placeholder="Preço"
      keyboardType="numeric"
      value={product.quantidade}
      onChangeText={(text) => setProduct({ ...product, quantidade: text })}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 40,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
