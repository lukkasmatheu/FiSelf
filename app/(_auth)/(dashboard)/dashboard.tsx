import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Logo } from '../../../components/Logo';
import { TotalBalance, TotalBalanceProps } from './components/balanceTotal';
import { CardStatics } from './components/cardStatic';
import {Menu} from './components/menu'
import { Transactions } from './components/transactions';

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
      "label": "Atividades",
      "selected": true,
    },
    {
      "icon": "bar-chart-outline",
      "label": "Estatisticas"
    },
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
      <Menu menu={menuItens} />
      <Transactions transactions={events}/>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:16
  },
});
