import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" 
          options={{
            drawerLabel: 'Inicio',
            title: 'Inicio',
          }}
        />
        <Drawer.Screen
          name="login" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Login',
            title: 'Login',
          }}
        />
        <Drawer.Screen
          name="register" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Cadastro',
            title: 'Cadastro',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}