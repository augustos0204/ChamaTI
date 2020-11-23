import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text, SafeAreaView} from 'react-native';
import { Camera } from 'expo-camera';

import { MaterialIcons, FontAwesome5, Zocial, Entypo, MaterialCommunityIcons} from '@expo/vector-icons';

import { 
    BotãoCadastrar,
    CaixaIcon, CaixaInput,
    ContainerFoto, ContainerInfo, ContainerIcons, ContainerInput,
} from './styles';
import { TextInput } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function Cadastro() {
    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <SafeAreaView>
                    <ContainerFoto>
                            <MaterialIcons name="photo-camera" size={60} color="black" />
                    </ContainerFoto>

                    <ContainerInfo>
                        <ContainerIcons>
                            <CaixaIcon>
                                <FontAwesome5 name="user-alt" size={24} color="black" />
                            </CaixaIcon>

                            <CaixaIcon>
                                <Zocial name="email" size={24} color="black" />
                            </CaixaIcon>

                            <CaixaIcon>
                                <Entypo name="location" size={24} color="black" />
                            </CaixaIcon>

                            <CaixaIcon>
                                <MaterialCommunityIcons name="file-document" size={24} color="black" />
                            </CaixaIcon>

                            <CaixaIcon>
                                <Entypo name="key" size={24} color="black" />
                            </CaixaIcon>
                            
                        </ContainerIcons>

                        <ContainerInput>
                            <CaixaInput>
                                <TextInput placeholder="Digite seu nome completo"/>
                            </CaixaInput>
                        
                            <CaixaInput>
                                <TextInput placeholder="Digite seu email"/>
                            </CaixaInput>
                            
                            <CaixaInput>
                                <TextInput placeholder="Digite seu CEP"/>
                            </CaixaInput>

                            <CaixaInput>
                                <TextInput placeholder="Digite seu CPF"/>
                            </CaixaInput>
                            
                        </ContainerInput>

                    </ContainerInfo>

                    <BotãoCadastrar>
                        <Text style={{fontSize:20, color: "#FFF"}}>Cadastrar</Text>
                    </BotãoCadastrar>
            </SafeAreaView>
        </View>
    );
}