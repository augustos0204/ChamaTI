import React from 'react';
import {View, Text, Button} from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
// import * as Font from 'expo-font';
import { AppLoading } from "expo";
// import { useFonts, AguafinaScript_400Regular } from '@expo-google-fonts/aguafina-script';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import logoloja from '../../images/fire.png';

import { 
    BotaoCadastrar, BotaoEntrar,
    ContainerBotao, ContainerInput, Clique, 
    InfoLoja,
    LogoLoja,
    NomeLoja,
    Footer,
    Usuario,
    Senha,

} from './styles';

const Stack = createStackNavigator();

export default function Entrada({navigation}) {

    // function TelaCadastro() {
    //     return (
    //         <Text>hybhjbnkjnkj</Text>
    //     );
    // }
    
    
    // let [fontLoaded] = useFonts({
    //     AguafinaScript_400Regular,

    //     "insta": require("../../../assets/fonts/Billabong.ttf")
    // });

    // if(!fontLoaded) {
    //     return <AppLoading/>;
    // }

    return (
        <View>
            <ScrollView>
                <InfoLoja>
                    
                    <NomeLoja>ChamaTi</NomeLoja>

                    <LogoLoja source={logoloja}/>

                </InfoLoja>

                <ContainerInput>
                    <Usuario>
                        <AntDesign name="user" size={24} color="black" />
                        <TextInput placeholder="Digite seu email"></TextInput>
                    </Usuario>

                    <Senha>
                        <EvilIcons name="lock" size={35} color="black" />
                        <TextInput placeholder="Digite seu email"></TextInput>
                    </Senha>
                </ContainerInput>

                
                <ContainerBotao>
                    <BotaoEntrar><Text style={{fontSize: 30, color: "#FFF"}}>Entrar</Text></BotaoEntrar>
                    <BotaoCadastrar>
                            <Text style={{fontSize: 30, color: "#FFF"}}>Criar Conta</Text></BotaoCadastrar>
                </ContainerBotao>

                <Footer>
                    <Text>Esqueceu sua senha?</Text>
                    <Clique>Clique aqui</Clique>

                </Footer>

            </ScrollView>
        </View>
    );
}