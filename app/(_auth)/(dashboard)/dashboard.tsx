import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Logo } from "../../../components/Logo";
import { TotalBalance } from "./components/balanceTotal";
import { CardStatics } from "../../../components/Card/cardStatic";
import { Menu } from "./components/menu";
import { Transactions } from "./components/transactions";

import dashboardData from '../../../mocks/dashboard.json';
import { useTheme } from "../../../context/themeContext";
import { Switch } from "react-native-gesture-handler";


export default function Dashboard() {
  const { totalBalance, balanceCards, menuItems, events } = dashboardData;
  const {theme,setTheme} = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === 'light' ? "#fff" : '#21223f',
      padding: 16,
    }
  });
  return (
    <View style={styles.container}>
      <Logo />
      {/* <Switch
          value={theme === 'dark'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        /> */}
      <TotalBalance amount={totalBalance.amount} change={totalBalance.change} />
      <CardStatics cardStatics={balanceCards} />
      <Menu menu={menuItems} />
      <Transactions transactions={events} />
      <StatusBar style="auto" />
    </View>
  );
}
