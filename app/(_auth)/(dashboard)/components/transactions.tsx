import { StyleSheet, ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export interface Transation {
  icon: any;
  color: string;
  title: string;
  description: string;
  amount: string;
  isPositive: boolean;
}

export interface TransactionList {
  transactions: Transation[];
}

export const Transactions = ({ transactions }: TransactionList) => (
  <ScrollView style={styles.transactionsList}>
    {transactions.map((transaction, index) => (
      <TransactionItem key={index} {...transaction} />
    ))}
  </ScrollView>
);

const TransactionItem = ({
  icon,
  color,
  title,
  description,
  amount,
  isPositive,
}: Transation) => (
  <View style={styles.transactionItem}>
    <View style={styles.transactionInfo}>
      <Ionicons name={icon} size={24} color={color} />
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionTitle}>{title}</Text>
        <Text style={styles.transactionDescription}>{description}</Text>
      </View>
    </View>
    <View style={styles.transactionAmount}>
      <Text
        style={[
          styles.transactionSign,
          { color: isPositive ? "green" : "red" },
        ]}
      >
        {isPositive ? "+" : "-"}
      </Text>
      <Text style={styles.transactionValue}>{amount}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  transactionsList: {
    flex: 1,
  },
  transactionItem: {
    padding: 12,
    color: "#3d3d3d3",
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  transactionInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  transactionDetails: {
    marginLeft: 12,
  },
  transactionTitle: {
    color: "#3d3d3d3",
    fontSize: 14,
  },
  transactionDescription: {
    color: "#948f8f",
    fontSize: 12,
    fontFamily: "OpenSans",
  },
  transactionAmount: {
    alignItems: "flex-end",
  },
  transactionSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  transactionValue: {
    color: "#807f7f",
    fontSize: 16,
  },
});
