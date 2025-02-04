// src/components/FloatingButton.tsx
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

type FloatingButtonProps = {
  onPress: () => void;
};

export const FloatingButton = ({ onPress }: FloatingButtonProps) => (
  <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
    <Ionicons
      name="settings-outline"
      size={20}
      color="black"
      style={styles.floatingButton}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    top: 35,
    zIndex: 999,
    right: 20,
  },
});
