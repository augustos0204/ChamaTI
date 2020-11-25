import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';


import TelaHistorico from '../Historico';
import TelaPedir from '../Pedir';
import TelaConversa from '../Conversas';
import TelaConta from '../Conta';
import BotaoPedir from '../../components/BotaoPedir';

const Tab = createBottomTabNavigator();

const icons = {

    Inicio: {
        lib: AntDesign,
        name: 'home'
    },

    Historico: {
        lib: MaterialIcons,
        name: 'history'
    },

    Conversas: {
        lib: AntDesign,
        name: 'contacts'
    },

    Conta: {
        lib: FontAwesome,
        name: 'user-circle-o'
    },
};


function MyTabs(){
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size, focused}) => {
                    if(route.name === 'Pedir') {
                        return <BotaoPedir
                            focused={focused}
                        />;
                    }
                   const { lib: Icon, name} = icons[route.name];
                   return<Icon name={name} color={color} size={size}/>;
                },
            })}

            tabBarOptions={{
                style: {
                    backgroundColor: '#F79C60'
                },

                activeTintColor: '#FFF',
                inactiveTintColor: '#000'
            }}
        >
            <Tab.Screen 
                name="Inicio" 
                component={TelaHistorico}
                
            />

            <Tab.Screen 
                name="Historico" 
                component={TelaHistorico}
                options={{
                    
                }}
            />

            <Tab.Screen
                name="Pedir" 
                component={TelaPedir} 
                options={{
                    title: ''
                }}
        
            />
             
            <Tab.Screen 
                name="Conversas" 
                component={TelaConversa}
                
            />
            <Tab.Screen name="Conta" component={TelaConta}/>
        </Tab.Navigator>
    );
}

export default function Home() {
    return (
        <MyTabs/>
    );
}