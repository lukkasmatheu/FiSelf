import { StyleSheet, Text, View } from "react-native";

export interface TotalBalanceProps {
  amount: string;
  change: string;
}

export const TotalBalance = (balance: TotalBalanceProps) => (
  <View style={styles.totalBalance}>
    <Text style={styles.totalBalanceText}> Total Balance </Text>
    <Text style={styles.balanceAmount}> {balance.amount} </Text>
    <Text style={styles.totalBalanceText}> Today Balance </Text>
    <View style={styles.balanceChange}>
      <Text style={styles.balanceChangeText}> {balance.change} </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  totalBalance: {
    alignItems: "center",
  },
  totalBalanceText: {
    color: "#828393",
    fontSize: 14,
    fontFamily: "OpenSans",
  },
  balanceAmount: {
    color: "#6e6e6e",
    fontSize: 24,
    fontFamily: "OpenSans",
  },
  balanceChange: {
    padding: 8,
  },
  balanceChangeText: {
    color: "#02ca8c",
    fontSize: 16,
    fontFamily: "OpenSans",
  },
});
