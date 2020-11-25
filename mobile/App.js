import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground, HeaderTitle } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Modalize } from 'react-native-modalize';

import TelaLogin from './src/screens/Login';
import TelaPreCadastro from './src/screens/PreCadastro';
import TelaCadastro from './src/screens/Cadastro';
import TelaConfirmacao from './src/screens/Confirmacao';
import TelaHome from './src/screens/Home';
import TelaHistorico from './src/screens/Historico';
import TelaModalConfirma from './src/components/ModalConfirma';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaLogin">
        <Stack.Screen 
          name="Bem-vindo" 
          component={TelaLogin}
          options={{
            headerStyle: {
              // backgroundColor: 'red',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#F87700'
          }}
        />

        <Stack.Screen 
          name="TelaPreCadastro" 
          component={TelaPreCadastro}
          options={{
            title: 'É bem rápido',
            headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen 
          name="TelaCadastro" 
          component={TelaCadastro}
          options={{
            title: 'Criar Conta',
            headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen 
          name="TelaModalConfirma" 
          component={TelaModalConfirma}
          options={{
            title: 'Modal',
            headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen 
          name="Home" 
          component={TelaHome}
          options={{
            title: 'Home',
            headerTitleAlign: 'center'
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

