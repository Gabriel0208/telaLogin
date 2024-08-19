import { Text, SafeAreaView, StyleSheet, Button,Alert,TextInput,Image,ScrollView,View} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <Card>
        <AssetExample />
      </Card>
      <Text style={styles.paragraph}>
        Seja Bem vindo a Mercedes!
      </Text>
      <TextInput
         style={{
           height: 40,
           borderColor: 'gray',
           borderWidth:1,
           backgroundColor:'white',
           color:'#87CEFA',
         }}
         defaultValue="Email: "
         />
         <TextInput
         style={{
           height: 40,
           borderColor: 'gray',
           borderWidth:1,
           backgroundColor:'white',
           color:'#87CEFA',
         }}
         defaultValue="Senha: "
         />
         <Button
         title="Entrar"
         color='white'
         />
         <Text style={styles.s}>
            Não consigo fazer login
         </Text>
          <Text style={styles.p}>
            Registre-se
         </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#B0C4DE',
    padding: 8,
  },
  paragraph: {
    margin: 40,
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    color:'white'
  },
  s:{
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#A52A2A'
  },
  p:{
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor:'black'
  }
});
