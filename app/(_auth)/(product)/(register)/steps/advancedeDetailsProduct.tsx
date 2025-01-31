import { View, StyleSheet, ScrollView } from "react-native";
import { Product } from "../registerProduct";
import { Input } from "../../../../../components/Input";
import DatePickerField from "../../../../../components/DatePicker";


interface ProducsProps {
  product: Product;
  setProduct: (e: any) => void;
}

export const AdvancedeDetailsProduct = ({
  product,
  setProduct,
}: ProducsProps) => (
    <ScrollView style={styles.scrollStyle}>
    <View style={styles.container}>
      <Input
        label="Descrição do Produto"
        placeholder="Descrição do produto"
        value={product.descricao}
        onChangeText={(text) => setProduct({ ...product, descricao: text })}
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
      
      <DatePickerField 
      placeHolder={"📅 Data de validade"} 
      title="Selecione uma data de validade" 
      date={product.validadeData} 
      setDate={(date) => setProduct({ ...product, validadeData: date })}
      minDate={new Date()}
      />
      
          
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 40,
    marginBottom:40,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  scrollStyle:{
    flex:1
  }
});
