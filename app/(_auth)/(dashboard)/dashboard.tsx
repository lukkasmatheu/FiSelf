import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Logo } from '../../../components/Logo';
import { Ionicons } from '@expo/vector-icons';
import { TotalBalance, TotalBalanceProps } from './components/balanceTotal';
import { CardStatics } from './components/cardStatic';

export default function Dashboard() {
  const totalBalance:TotalBalanceProps = {
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

  const events = [
    {
      "icon": "arrow-down-outline",
      "color": "red",
      "title": "Memorias RAM 8gb",
      "description": "Today, 13:45",
      "amount": "- R$198.25",
      "isPositive": false
    },
    {
      "icon": "arrow-up-outline",
      "color": "green",
      "title": "Formatação/Limpeza maquina",
      "description": "Today, 13:45",
      "amount": "+R$260.50",
      "isPositive": true
    },
    {
      "icon": "arrow-down-outline",
      "color": "red",
      "title": "Placa de Video rtx580",
      "description": "July 23, 2016",
      "amount": "-R$840.20",
      "isPositive": false
    },
    {
      "icon": "arrow-up-outline",
      "color": "green",
      "title": "Formatação/Limpeza maquina",
      "description": "Today, 13:45",
      "amount": "+R$260.00",
      "isPositive": true
    }
  ];

  return (
    <View style={styles.container}> 
      <Logo/>
      <TotalBalance amount={totalBalance.amount} change={totalBalance.change}/>
      <CardStatics cardStatics={balanceCards}/>
      <Menu items={menuItens} />
      <TransactionsList transactions={events}/>
      <StatusBar style="auto" />
    </View>
  );
}


const TransactionsList = ({ transactions }) => (
  <ScrollView style={styles.transactionsList}>
    {transactions.map((transaction, index) => (
      <TransactionItem key={index} {...transaction} />
    ))}
  </ScrollView>
);

const TransactionItem = ({ icon, color, title, description, amount, isPositive }) => (
  <View style={styles.transactionItem}>
    <View style={styles.transactionInfo}>
      <Ionicons name={icon} size={24} color={color} />
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionTitle}>{title}</Text>
        <Text style={styles.transactionDescription}>{description}</Text>
      </View>
    </View>
    <View style={styles.transactionAmount}>
      <Text style={[styles.transactionSign, { color: isPositive ? 'green' : 'red' }]}>
        {isPositive ? '+' : '-'}
      </Text>
      <Text style={styles.transactionValue}>{amount}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:16
  },
  transactionsList: {
    flex: 1,
  },
  transactionItem: {
    padding: 12,
    color:'#3d3d3d3',
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionDetails: {
    marginLeft: 12,
  },
  transactionTitle: {
    color:'#3d3d3d3',
    fontSize: 14,
  },
  transactionDescription: {
    color: '#948f8f',
    fontSize: 12,
    fontFamily: 'OpenSans',
  },
  transactionAmount: {
    alignItems: 'flex-end',
  },
  transactionSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  transactionValue: {
    color: '#807f7f',
    fontSize: 16,
  },
  
});
