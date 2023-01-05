import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hola, 
      <Text style={styles.subTexto}> Coder</Text> 🚀!.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27282D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#E0F676',
    fontSize: 18
    
  },
  subTexto : {
    fontWeight: 'bold'
  }
});
