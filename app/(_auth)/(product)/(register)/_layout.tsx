import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
    <Stack.Screen
    name="registerProduct"
    options={{
      headerShown: false
    }}/>
    <Stack.Screen
    name="registerSale"
    options={{
      headerShown: false
    }}/>
    </Stack>
  );
}
