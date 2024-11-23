import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function _layout() {

  return (
    <Tabs>
      <Tabs.Screen
        name="(dashboard)/dashboard"
        options={{
          headerShown: false,
          title: "Dashboard",
          tabBarIcon:()=>(
            <Ionicons size={28} name={"analytics-outline"} />
          )
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          headerShown: false,
          title: "Produtos",
          tabBarIcon:()=>(
            <Ionicons size={28} name={"bag-handle-outline"} />
          )
        }}
      />
      <Tabs.Screen
        name="cad"
        options={{
          headerShown: false,
          title: "Cadastro",
          tabBarIcon:()=>(
            <Ionicons size={28} name={"bag-add-outline"} />
          )
        }}
      />
    </Tabs>
  );
}