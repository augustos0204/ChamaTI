import React, { useState } from 'react';
import {View, Text, Button} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
// import * as Font from 'expo-font';
import { AppLoading } from "expo";
// import { useFonts, AguafinaScript_400Regular } from '@expo-google-fonts/aguafina-script';
import { AntDesign, EvilIcons } from '@expo/vector-icons';

import logoloja from '../images/fire.png'; 

import api from '../../services/api';

import { 
    BotaoCadastrar, BotaoEntrar,
    ContainerBotao, ContainerInput,
    InfoLoja,
    LogoLoja,
    NomeLoja,
    Footer,
    Usuario,
    Senha,

} from './styles';


export default function Entrada({navigation}) {
    const [ email, setEmail ] = useState("");

    const [ senha, setSenha ] = useState("");

    const emailHandler = ( value ) => {
        setEmail( value );

        console.log( email );
    }

    const senhaHandler = ( value ) => {
        setSenha( value );
    }

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
                    
                    <NomeLoja>CHAMAti</NomeLoja>

                    <LogoLoja source={logoloja}/>

                </InfoLoja>

                <ContainerInput>
                    <Usuario>
                        <AntDesign name="user" size={24} color="black" />
                        <TextInput placeholder="Digite seu email" onChange={ ( valor ) => emailHandler( valor )}></TextInput>
                    </Usuario>

                    <Senha>
                        <EvilIcons name="lock" size={35} color="black" />
                        <TextInput placeholder="Digite seu email"></TextInput>
                    </Senha>
                </ContainerInput>

                
                <ContainerBotao>
                    <BotaoEntrar><Text style={{fontSize: 30, color: "#FFF"}}>Entrar</Text></BotaoEntrar>
                    <BotaoCadastrar><Text style={{fontSize: 30, color: "#FFF"}}>Criar Conta</Text></BotaoCadastrar>
                </ContainerBotao>
                <Footer>
                
                    <Text>Esqueceu sua senha?</Text>
                    <Text style={{color: "#F87700"}}>Clique aqui</Text>
                </Footer>

            </ScrollView>
        </View>
    );
 }