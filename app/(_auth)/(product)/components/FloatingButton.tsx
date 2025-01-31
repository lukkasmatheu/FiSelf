// src/components/FloatingButton.tsx
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type FloatingButtonProps = {
  onPress: () => void;
};

const FloatingButton = ({ onPress }: FloatingButtonProps) => (
  <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
    <AntDesign name="shoppingcart" size={35} color="black" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#00000034",
    borderRadius: 100,
    padding: 8,
  },
});

export default FloatingButton;
