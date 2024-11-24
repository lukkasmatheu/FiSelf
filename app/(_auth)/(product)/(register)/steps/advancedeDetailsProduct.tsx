import { View, StyleSheet } from "react-native";
import { Product } from "../registerProduct";
import { Input } from "../../../../../components/Input";


interface ProducsProps {
  product: Product;
  setProduct: (e: any) => void;
}

export const AdvancedeDetailsProduct = ({
  product,
  setProduct,
}: ProducsProps) => (
  <View style={styles.container}>
    <Input
      label="Descrição do Produto"
      placeholder="Descrição do produto"
      value={product.nome}
      onChangeText={(text) => setProduct({ ...product, descricao: text })}
    />

    <Input
      label="Data de validade"
      placeholder="Data de validade dd/mm/yyyy"
      textContentType="birthdate"
      value={product.validadeData}
      onChangeText={(text) => setProduct({ ...product, validadeData: text })}
    />

    <Input
      label="Quantidade minima de estoque"
      placeholder="Quantidade minima de estoque"
      keyboardType="numeric"
      value={product.minQuantidade}
      onChangeText={(text) => setProduct({ ...product, minQuantidade: text })}
    />

    <Input
      label="Codigo de barras"
      placeholder="codigo de barras"
      keyboardType="numeric"
      value={product.codigoBarras}
      onChangeText={(text) => setProduct({ ...product, codigoBarras: text })}
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
