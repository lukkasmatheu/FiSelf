import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

export default function _layout() {

  return (
    <Tabs>
      <Tabs.Screen
        name="dashboard"
        options={{
          headerShown: false,
          title: "Dashboard",
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          headerShown: false,
          title: "Produtos",
        }}
      />
    </Tabs>
  );
}