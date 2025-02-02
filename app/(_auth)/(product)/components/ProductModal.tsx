// src/components/ProductModal.tsx
import React from "react";
import { Modal, View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Product } from "../../../../utils/parsers";
import { formatToBRL } from "../../../../utils/utils";

type ProductModalProps = {
  visible: boolean;
  selectedProduct: Product | null;
  closeModal: () => void;
  updateQuantity: (quantity: number) => void;
  addBag: () => void;
  quantity: number;
};

export const ProductModal = ({
  visible,
  selectedProduct,
  closeModal,
  updateQuantity,
  addBag,
  quantity,
}: ProductModalProps) => {
  if (!selectedProduct) return null;

  return (
    <Modal animationType="slide" transparent visible={visible} onRequestClose={closeModal}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <AntDesign name={"arrowleft"} size={25} color="black" />
          </TouchableOpacity>
          <Image source={{ uri: selectedProduct.image }} style={styles.modalImage} />
          <Text style={styles.modalTitle}>{selectedProduct.productName}</Text>
          <Text style={styles.modalPrice}>{formatToBRL(selectedProduct.salePrice)}</Text>
          <Text style={styles.modalStock}>Estoque {selectedProduct.quantity} un.</Text>
          <Text style={styles.modalDescription}>{selectedProduct.description}</Text>

          <View style={styles.quantityBox}>
            <AntDesign name={"minus"} size={20} color="red" onPress={() => updateQuantity(quantity - 1)} />
            <Text style={styles.textQuantity}>{quantity}</Text>
            <AntDesign name={"plus"} size={20} color="green" onPress={() => updateQuantity(quantity + 1)} />
            <Text style={styles.textQuantity}>{formatToBRL(selectedProduct.salePrice * quantity)}</Text>
            {quantity > 0 && <AntDesign name="shoppingcart" size={25} color="green" onPress={addBag} />}
          </View>
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
    width: 300,
    alignItems: "center",
  },
  modalImage: {
    width: 160,
    height: 160,
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  modalPrice: {
    fontSize: 16,
    color: "#777",
    marginTop: 5,
  },
  modalStock: {
    color: "#777",
    marginTop: 5,
  },
  modalDescription: {
    fontSize: 14,
    color: "#555",
    marginTop: 10,
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  quantityBox: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  textQuantity: {
    paddingHorizontal: 15,
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
});

