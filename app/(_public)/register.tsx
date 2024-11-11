import { StyleSheet, Text, View } from 'react-native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useRouter } from 'expo-router';

export default function Register() {
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
        <Input label='nome' textContentType={'username'}/> 
        <Input label='Email' textContentType={'emailAddress'}/>
        <Input label='Senha' textContentType={'password'} secureTextEntry={true}/>
        <Input label='Repita a senha' textContentType={'password'} secureTextEntry={true}/>
        <Input label='CNPJ da Empresa' textContentType={'organizationName'}/> 
      </View>
      <View style={styles.buttons}> 
        <Button width={180} title='login' onPress={()=>navigate('login')}/>
        <Button width={180} color="green"  title='Salvar Cadastro' onPress={()=>navigate('register')}/>
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
    marginBottom:10,
    backgroundColor: '#fff',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs: {
    width:'100%',
    height: '55%',
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
