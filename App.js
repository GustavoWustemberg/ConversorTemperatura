import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';

export default function App() {
  function teste(){
    Alert.alert('testado');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🥶 Aplicativo Temperatura 🥵</Text>
      <TextInput style={styles.inputTemperature} 
      placeholder='Informe a temperatura em celsius'
      keyboardType='numeric'/>

      <TouchableOpacity onPress={teste}>
      <Text style={styles.buttonCalculed}>Calcular</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    fontSize: 22,
    color: '#FFF',
  },
  buttonCalculed: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTemperature: {
    backgroundColor: '#fff',
    color: '#000',
    margin: 15,
    padding: 10,
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 1,
  }
});