import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Logo } from '../../components/Logo';
import { Ionicons } from '@expo/vector-icons';

export default function Dashboard() {
  const totalBanlance = {
    "label": "Total balance",
    "amount": "R$3968,52",
    "change": "+ R$282,00"
  }
  const balanceCards = [
    {
      "color": "#00cccc",
      "label": "Vendas",
      "value": "R$890.30",
      "percentage": "0.30%",
      "typeChange" :'up'
    },
    {
      "color": "#7359ff",
      "label": "Despesas",
      "value": "R$890.30",
      "percentage": "0.30%",
      "typeChange" :'down'
    },
    {
      "color": "#7a7faf",
      "label": "Serviços",
      "value": "R$138.10",
      "percentage": "2.58%",
      "typeChange" :'up'
    }
  ];
  const menuItens = [
    {
      "icon": "arrow-up-outline",
      "label": "Activities"
    },
    {
      "icon": "bar-chart-outline",
      "label": "Statistics"
    },
    {
      "icon": "document-text-outline",
      "label": "Summary"
    }
  ];

  return (
    <View style={styles.container}> 
      <Logo/>
      <TotalBalance data={totalBanlance}/>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsContainer}>
          {balanceCards.map((card, index) => (
            <BalanceCard key={index} {...card} />
          ))}
      </ScrollView>
      <Menu items={menuItens} />
      <StatusBar style="auto" />
    </View>
  );
}

const TotalBalance = ({ data }) => (
  <View style={styles.totalBalance}>
    <Text style={styles.totalBalanceText}> {data.label} </Text>
    <Text style={styles.balanceAmount}> {data.amount} </Text>
    <Text style={styles.totalBalanceText}> Today balance </Text>
    <View style={styles.balanceChange}>
      <Text style={styles.balanceChangeText}> {data.change} </Text>
    </View>
  </View>
);

const BalanceCard = ({ color, label, value, percentage, typeChange }) => (
  <View style={[styles.balanceCard, { backgroundColor: color }]}>
    <Text style={styles.balanceCardLabel}>{label}</Text>
    <Text style={styles.balanceCardValue}>{value}</Text>
    <View style={styles.balanceCardRow}>
      <Ionicons name={typeChange === 'up' ? "arrow-up-outline" : "arrow-down-outline"} size={16} color="white" />
      <Text style={styles.balanceCardPercentage}>{percentage}</Text>
    </View>
  </View>
);

const Menu = ({ items }) => (
  <View style={styles.menu}>
    {items.map((item, index) => (
      <MenuItem key={index} icon={item.icon} label={item.label} />
    ))}
  </View>
);

const MenuItem = ({ icon, label }) => (
  <View style={styles.menuItem}>
    <Ionicons name={icon} size={24} color="black" />
    <Text style={styles.menuItemText}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:16
  },
  totalBalance: {
    alignItems: 'center',
  },
  totalBalanceText: {
    color: '#828393',
    fontSize: 14,
    fontFamily: 'OpenSans',
  },
  balanceAmount: {
    color: '#6e6e6e',
    fontSize: 24,

    fontFamily: 'OpenSans',
  },
  balanceChange: {
    padding: 8,
  },
  balanceChangeText: {
    color: '#02ca8c',
    fontSize: 16,
    fontFamily: 'OpenSans',
  },
  cardsContainer: {
    marginVertical: 16,
  },
  balanceCard: {
    width: 140,
    height: 110,
    padding: 16,
    borderRadius: 10,
    marginRight: 8,
  },
  balanceCardLabel: {
    color: '#adffff',
    fontSize: 14,
    fontFamily: 'OpenSans',
  },
  balanceCardValue: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'OpenSans',
  },
  balanceCardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  balanceCardPercentage: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 4,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuItemText: {
    color: '#928f8f',
    fontSize: 12,
    marginTop: 4,
  },
  
});
