import { StyleSheet, Text, View } from 'react-native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter()
  const navigate = (route:string) =>{
    router.push('/' + route)
  }
  return (
    <View style={styles.container}> 
      <View style={styles.logo}> 
        <Text style={styles.firtText}>Fi</Text>
        <Text style={styles.secondText}>Self</Text>
      </View>
      <View style={styles.inputs}> 
        <Input label='Email' textContentType={'emailAddress'}/>
        <Input label='Senha' textContentType={'password'} secureTextEntry={true}/>
      </View>
      <View style={styles.buttons}> 
        <Button width={180} title='Entrar' onPress={()=>navigate('(_auth)/dashboard')}/>
        <Button width={180} title='Cadastro' onPress={()=>navigate('register')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    marginTop:50,
    marginBottom:80,
    backgroundColor: '#fff',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs: {
    width:'100%',
    height: 200,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttons: {
    height:80,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent:'space-between'
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
