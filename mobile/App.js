import React from 'react';
import { AsyncStorage, View, KeyboardAvoidingView, Image, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Login() {

  const conectar = () => {

  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
          style={styles.imagem}
          resizeMode= 'center'
          source={require('./src/Image/fire.png')}
        />

      </View>

        <View style={styles.container}>

          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCorrect={false}
            onChangeText={()=> {}}
          />

        <TextInput
            style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            onChangeText={()=> {}}
          />
        

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnSubmitText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnSubmitText}>Criar Conta</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    // backgroundColor: '#181818',
  }, 
  containerLogo: {
    flex: 1,
    justifyContent:'center',
    // backgroundColor: '#181818',
  },

  imagem: {
    width: 150,
    height: 150,

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    // height: '80%',
  }, 
  
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#F87700',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  }, 
  
  btnSubmit: {
    backgroundColor: '#F87700',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom: 5,
  },

  btnSubmitText: {
    fontSize: 18,
  }
});

