import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [resultado, setResultado] = useState(0);

  function somar(){
    setResultado(parseFloat(valor1) + parseFloat(valor2));
  }
  function subtrair(){
    setResultado(parseFloat(valor1) - parseFloat(valor2));
  }
  function multiplicar(){
    setResultado(parseFloat(valor1) * parseFloat(valor2));
  }
  function dividir(){
    setResultado(parseFloat(valor1) / parseFloat(valor2));
  }
  function clear() {
    setResultado(null);
    setValor1 ("");
    setValor2 ("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>My Calc</Text>
      <Image
        style={styles.logo}
        source={{
          uri: '',
        }}
      />
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor 1</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor1}
          placeholder='Digite o primeiro valor'
          onChangeText={(texto)=>setValor1(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor 2</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor2}
          placeholder ='Digite o segundo valor'
          onChangeText={(texto)=>setValor2(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={somar}
        >
            <Text style={styles.textoBotao}>Somar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={subtrair}
        >
            <Text style={styles.textoBotao}>Subtrair</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={multiplicar}
        >
            <Text style={styles.textoBotao}>multiplicar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={dividir}
        >
            <Text style={styles.textoBotao}>dividir</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Resultado: {resultado}</Text>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={clear}
        >
            <Text style={styles.textoBotao}>Limpar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c47f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBloco:{
    fontSize:20,
    fontWeight: 'bold',
  },
  texto:{
    color:'#9dffe6',
    fontSize:45,
    fontWeight: 'bold',
  },
  input:{
    borderColor:'#000',
    borderWidth:2,
    fontSize:30,
    width:'80%',
    borderRadius: '15px',
    fontSize: '25px',
    textAlign: 'center',
  },
  bloco:{
    width:'100%',
    alignItems:'center',
    marginTop:30,
    borderRadius: '15px',
  },
  botao:{
    backgroundColor:'#9dffe6',
    width:'80%',
    textAlign:'center',
    borderRadius: '15px',
  },
  textoBotao:{
    color:"black",
    fontSize:30,
    fontWeight: 'bold',
  }, 
  logo:{
    width:50,
    height:50
  }
});
