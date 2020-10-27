import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { api } from './src/services/api';

export default function Login() {
  const [usuarioLogin, setUsuarioLogin] = useState({
      email: "",
      senha: ""
  });

  const handlerInput = (e) => {
    setUsuarioLogin({...usuarioLogin, [e.target.id]: e.target.value});

    console.log(e.target.id);

    // console.log({...usuarioLogin, [e.target.id]: e.target.value});
  }

  const login = async () => {
    try {
      const response = await api.post("/sessao/cliente", usuarioLogin);

      if(response.status === 201){
          console.log("Logado!");
      }
    } 
    catch (error) {
      console.log(error);
      if(error.response){
          return console.log(error.response.data.erro);
      }
      else{
          return console.log("Ops, erro de conexão...");
      }
    }
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
            id='email'
            placeholder={"Email"}
            autoCorrect={false}
            value={usuarioLogin.email}
            // onChange={handlerInput}
            // onChangeText={handlerInput}
          />

        <TextInput
            style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            value={usuarioLogin.senha}
            onChangeText={handlerInput}
          />

          <TextInput
            style={styles.input}

            placeholder={"Email"}
            // style={styles.textInput}
            // placeholderTextColor= {colors.white}
            value={usuarioLogin.email}
            // onChangeText={(text:string) => setEmail(text)}
          />
        
        <TouchableOpacity style={styles.btnSubmit} onPressOut={login}>
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

