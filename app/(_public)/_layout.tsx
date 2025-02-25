import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import ToastManager from "toastify-react-native";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ToastManager />
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Inicio",
            title: "Inicio",
          }}
        />
        <Drawer.Screen
          name="login"
          options={{
            drawerLabel: "Login",
            title: "Login",
          }}
        />
        <Drawer.Screen
          name="register"
          options={{
            drawerLabel: "Cadastro",
            title: "Cadastro",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
