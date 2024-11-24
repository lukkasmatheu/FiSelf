import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Logo } from "../../../components/Logo";
import { TotalBalance, TotalBalanceProps } from "./components/balanceTotal";
import { CardStatics } from "../../../components/Card/cardStatic";
import { Menu } from "./components/menu";
import { Transactions } from "./components/transactions";

import dashboardData from '../../../mocks/dashboard.json';

export default function Dashboard() {
  const { totalBalance, balanceCards, menuItems, events } = dashboardData;

  return (
    <View style={styles.container}>
      <Logo />
      <TotalBalance amount={totalBalance.amount} change={totalBalance.change} />
      <CardStatics cardStatics={balanceCards} />
      <Menu menu={menuItems} />
      <Transactions transactions={events} />
      <StatusBar style="auto" />
    </View>
  );
}

<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
=======


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:16
>>>>>>> 632f2c503b7fc40d3301ef0c5b2e16c7b6f2ebd4
  },
});
