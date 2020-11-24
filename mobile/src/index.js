import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Navigation from './Navigation';
import TelaEntrada from './screens/TelaEntrada';
import Inicio from './screens/Inicio';

export default function App() {
  return (
    <>
      <TelaEntrada/>

      {/* <Inicio/> */}
      
    {/* <StatusBar barStyle="light-content" backgroundColor="#000"/>
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer> */}
    </>
  );
}


