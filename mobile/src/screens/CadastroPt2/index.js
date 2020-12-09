import React from 'react';
// import {TextInputMask} from 'react-native-masked-text';
import { View, Text, SafeAreaView, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons, Foundation, FontAwesome } from '@expo/vector-icons'

import foto from '../../images/login.png';

export default function CadastroPt2({navigation}) {
  return(
    <SafeAreaView style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       
      <View style={styles.views}>
        <MaterialCommunityIcons name="email-outline" size={24} color="black"/>
        <TextInput placeholder="Digite seu email" keyboardType={'email-address'} style={styles.inputis}/>
      </View>

      <View style={styles.views}>
      <Foundation name="telephone" size={24} color="black" />
        <TextInput 
          autoCorrect={false}
          style={styles.inputis} placeholder="Digite seu telefone"
          keyboardType={'numeric'}
        />
      </View>

      <View style={styles.views}>
      <FontAwesome name="intersex" size={24} color="black" />
        <TextInput 
          autoCorrect={false}
          style={styles.inputis} placeholder="Sexo"
        />
      </View>

      <TouchableOpacity onPress={() => {navigation.navigate('TelaCadastroPt3')}}>
        <Text>Teste</Text>
      </TouchableOpacity>


    </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  views: {
    height: 50,
    display: 'flex',
    // backgroundColor: 'red',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginLeft: 30,
    marginBottom: 20

  },

  inputis: {
    width: 300,
    borderWidth: 1,
    borderStyle: 'solid',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black',
    marginLeft: 15,
  }
})