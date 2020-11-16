import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, MaterialIcons, EvilIcons, Entypo, FontAwesome } from '@expo/vector-icons';

import BotaoPedir from './components/BotaoPedir';

import TelaCadastro from './screens/Cadastro';
import TelaConta from './screens/Conta';
import TelaConversas from './screens/Conversas';
import TelaHistorico from './screens/Historico';
import TelaInicio from './screens/Inicio';
import TelaLogin from './screens/Login';
import TelaPedir from './screens/Pedir'; 

const Tab = createBottomTabNavigator();

const icons = {

    Inicio: {
        lib: AntDesign,
        name: 'home',
    },

    Historico: {
        lib: MaterialIcons,
        name: 'history',
    },

    Conversas: {
        lib: AntDesign,
        name: 'contacts',
    },

    Conta: {
        lib: FontAwesome,
        name: 'user-circle-o',
    },

};


export default function Navigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size, focused}) => {
                    if (route.name === 'Pedir') {
                        return (
                            <BotaoPedir
                                focused={focused}
                            
                            />
                        );
                    }
                    const { lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={size} color={color}/>;
                },
            })}

            tabBarOptions = {{
                style: {
                    backgroundColor: '#F87700',
                },

                activeTintColor: '#fff',
                inactiveTintColor: '#000',
            }}
        
        >
            <Tab.Screen 
                name="Inicio" 
                component={TelaInicio}
                options={{
                    title: 'Inicio',
                }}
            />
            <Tab.Screen 
                name="Historico" 
                component={TelaHistorico}
                options={{
                    title: 'Historico',
                }}
            />
            <Tab.Screen 
                name="Pedir" 
                component={TelaPedir}
                options={{
                    title: '',
                }}
            />
            <Tab.Screen 
                name="Conversas" 
                component={TelaConversas}
                options={{
                    title: 'Conversas',
                }}
            />
            <Tab.Screen 
                name="Conta" 
                component={TelaConta}
                options={{
                    title: 'Conta',
                }}
            />
            {/* <Tab.Screen name="Cadastro" component={TelaCadastro}/> */}
        </Tab.Navigator>

    );
}


