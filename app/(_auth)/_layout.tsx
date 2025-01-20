import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ThemeProvider } from "../../context/themeContext";

export default function _layout() {
  return (
    <ThemeProvider>
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
          name="(product)/products"
          options={{
            headerShown: false,
            title: "Produtos",
            tabBarIcon: () => <Ionicons size={28} name={"bag-handle-outline"} />,
          }}
        />
        <Tabs.Screen
          name="(product)/productCreate"
          options={{
            headerShown: false,
            title: "Cadastro",
            tabBarIcon: () => <Ionicons size={28} name={"bag-outline"} />,
          }}
        /> 
        <Tabs.Screen
          name="(product)/(register)"
          options={{
            href: null,
            headerShown: false,
            title: "Venda",
            tabBarIcon: () => <Ionicons size={28} name={"bag-add-outline"} />,
          }}
        />
      </Tabs>
    </ThemeProvider>
    
  );
}
