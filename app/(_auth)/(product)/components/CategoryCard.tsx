// src/components/CategoryCard.tsx
import React from "react";
import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../../../../utils/parsers";
import { formatToBRL } from "../../../../utils/utils";

type CategoryCardProps = {
  product: Product;
  onPress: (product: Product) => void;
};

export const CategoryCard = ({ product, onPress }: CategoryCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(product)}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.productName}</Text>
      <Text style={styles.price}>{formatToBRL(product.salePrice)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 150,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 10,
    marginRight: 16,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
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
    fontWeight: "bold",
    color: "#333",
  },
  price: {
    fontSize: 14,
    color: "gray",
  },
});

