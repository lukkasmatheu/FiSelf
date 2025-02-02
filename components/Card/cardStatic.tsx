import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, ScrollView, Text, View } from "react-native";

export interface staticsMounth {
  color: string;
  label: string;
  value: string;
  percentage?: string;
  typeChange?: string;
}

export interface CardStaticsProps {
  cardStatics: staticsMounth[];
}

export const CardStatics = ({ cardStatics }: CardStaticsProps) => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.cardsContainer}
  >
    {cardStatics.map((card, index) => (
      <BalanceCard key={index} {...card} />
    ))}
  </ScrollView>
);

const BalanceCard = (card: staticsMounth) => (
  <View style={[styles.balanceCard, { backgroundColor: card.color }]}>
    <Text style={styles.balanceCardLabel}>{card.label}</Text>
    <Text style={styles.balanceCardValue}>{card.value}</Text>
    {card.percentage && (
      <View style={styles.balanceCardRow}>
        <Ionicons
          name={
            card.typeChange === "up" ? "arrow-up-outline" : "arrow-down-outline"
          }
          size={16}
          color="white"
        />
        <Text style={styles.balanceCardPercentage}>{card.percentage}</Text>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  cardsContainer: {
    marginVertical: 16,
    flexGrow: 0,
  },
  balanceCard: {
    width: 140,
    padding: 16,
    borderRadius: 10,
    marginRight: 8,
  },
  balanceCardLabel: {
    color: "#ffff",
    fontSize: 14,
    fontFamily: "OpenSans",
  },
  balanceCardValue: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "OpenSans",
  },
  balanceCardRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  balanceCardPercentage: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 4,
  },
});
