import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Logo } from "../../../components/Logo";
import { TotalBalance, TotalBalanceProps } from "./components/balanceTotal";
import { CardStatics } from "../../../components/Card/cardStatic";
import { Menu } from "./components/menu";
import { Transactions } from "./components/transactions";

import dashboardData from "../../../mocks/dashboard.json";
import { DashboardData, transformFinancialData } from "../../../utils/parsers";
import api from "../../../api/interceptors";

export default function Dashboard() {
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);

  useEffect(() => {
    api.get("/v1/financial")
      .then((response) => {
        const transformedData = transformFinancialData(response.data);
        setDashboard(transformedData);
      })
      .catch((e) => Alert.alert("Erro ao buscar dados financeiros", e.message));
  }, []);

  return dashboard ? (
    <View style={styles.container}>
      <Logo />
      <TotalBalance
        amount={dashboard.totalBalance.amount || "R$ 00.00"}
        change={dashboard.totalBalance.change || "R$ 00.00"}
      />
      <CardStatics cardStatics={dashboard?.balanceCards} />
      <Menu menu={[dashboard?.menuItems[0]]} />
      <Transactions transactions={dashboard.events} />
      <StatusBar style="auto" />
    </View>
  ) : (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" />
      <Text>Carregando</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  loadingContainer:{
    flex:1,
    backgroundColor: "#fff",
    justifyContent:"center",
    alignItems:"center"
  }
});
