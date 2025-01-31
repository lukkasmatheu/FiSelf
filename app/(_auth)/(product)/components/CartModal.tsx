// src/components/CartModal.tsx
import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Product } from "../../../../utils/parsers";
import { formatToBRL } from "../../../../utils/utils";

type CartModalProps = {
  visible: boolean;
  sale: { product: Product; quantity: number }[];
  closeModal: () => void;
  onSale: () => void;
};

const CartModal = ({ visible, sale, closeModal,onSale }: CartModalProps) => {
    const totalSale = sale.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.product.salePrice) ,0,)
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <AntDesign name={"arrowleft"} size={25} color="black" />
          </TouchableOpacity>
          <Text>Carinho de Compra</Text>
          <ScrollView>
            {sale.map(({ product, quantity }) => (
              <View key={product.id} style={styles.modalContainer}>
                <Image
                  source={{ uri: product.image }}
                  style={{ width: 50, height: 50, borderRadius:8 }}
                />
                <View style={{ marginHorizontal:40 }}>
                <Text>Produto: {product.productName}</Text>
                <Text>
                    Valor: {formatToBRL(product.salePrice * quantity)}
                </Text>
                </View>
                <Text style={{ marginTop:15,marginVertical:15 }}>{quantity} Un.</Text>
              </View>
            ))}
          </ScrollView>
        </View>
            <View>Total:{formatToBRL(totalSale)} 
            <TouchableOpacity onPress={onSale} style={styles.finishButton}>
            Finalizar Venda
          </TouchableOpacity>
          </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    height: "90%",
    alignItems: "center",
  },
  modalContainer: {
    width: "100%",
    marginTop:15,
    borderWidth: 1,
    flexDirection: "row",
    borderRadius:8
  },
  closeButton: {
    position: "absolute",
    top: 20,
    left: 10,
  },finishButton:{
    borderRadius:8,
    color:"green",
    backgroundColor:"#00000000"
  }
});

export default CartModal;
