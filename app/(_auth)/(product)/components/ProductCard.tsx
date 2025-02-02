// src/components/ProductCard.tsx
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Product } from "../../../../utils/parsers";
import { formatToBRL } from "../../../../utils/utils";

type ProductCardProps = {
  product: Product;
  onPress: (product: Product) => void;
};

export const ProductCard = ({ product, onPress }: ProductCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(product)}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.productName}>{product.productName}</Text>
        <Text style={styles.productPrice}>{formatToBRL(product.salePrice)}</Text>
        
      </View><Text style={styles.productQuantity}>{product.quantity}un.</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 220,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginRight: 16,
    padding: 10,
    justifyContent: "flex-end"
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  details: {
    alignItems: "center",
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  productPrice: {
    fontSize: 12,
    color: "#888",
  },
  productQuantity:{
    textAlign: "right",
    fontSize: 10,
    color: "#888",
}
});
