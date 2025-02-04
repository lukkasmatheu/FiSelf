import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Logo } from "../../../components/Logo";
import { TotalBalance } from "./components/balanceTotal";
import { CardStatics } from "../../../components/Card/cardStatic";
import { Menu } from "./components/menu";
import { Transactions } from "./components/transactions";

import { DashboardData, transformFinancialData } from "../../../utils/parsers";
import api from "../../../api/interceptors";

import { FloatingButton } from "./components/FloatingButton";
import { ConfigModal } from "./components/configModal";

export default function Dashboard() {
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    updateDashboard();
    setRefreshing(false);
  }, []);

  const updateDashboard = () => {
    setLoading(true);
    api
      .get("/v1/financial")
      .then((response) => {
        const transformedData = transformFinancialData(response.data);
        setDashboard(transformedData);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          Alert.alert("Não foram encontrados nenhum registro.");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {}, []);

  return loading ? (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" />
      <Text>Carregando</Text>
    </View>
  ) : (
    <View style={styles.container}>
      {!showModal && (
        <FloatingButton onPress={() => setShowModal(!showModal)} />
      )}
      <Logo />
      <TotalBalance
        amount={dashboard?.totalBalance.amount || "R$ 00.00"}
        change={dashboard?.totalBalance.change || "R$ 00.00"}
      />
      {dashboard ? (
        <>
          <CardStatics cardStatics={dashboard?.balanceCards} />
          <Menu menu={[dashboard?.menuItems[0]]} />
          <Transactions transactions={dashboard.events} />
        </>
      ) : (
        <TouchableOpacity
          style={{ flex: 1, padding: 16 }}
          onPress={onRefresh}
        >
          <Text style={{ textAlign: "center" }}>
            Nenhum dado cadastrado ainda.
          </Text>
          <Text style={{ textAlign: "center" }}>
            ATUALIZAR PAGINA.
          </Text>
        </TouchableOpacity>
      )}
      <StatusBar style="auto" />
      <ConfigModal
        visible={showModal}
        closeModal={() => setShowModal(!showModal)}
      />
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
  loadingContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
