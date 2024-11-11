import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Dashboard() {

  return (
    <View style={styles.container}> 
    {/* TODO componetizar Logo [criar logo pequena a esquerda/logo central/logo roda pé] */}
      <View style={styles.logo}> 
        <Text style={styles.firtText}>Fi</Text>
        <Text style={styles.secondText}>Self</Text>
      </View>
      <Text>Voce esta acessando a area autenticada do app</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom:80,
    backgroundColor: '#fff',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firtText:{
    // fontFamily:'sans serif',
    fontSize:40,
    color:'blue'
  },
  secondText:{
    // fontFamily:'sans serif',
    fontSize:40,
    fontWeight:"bold"
  }
});
