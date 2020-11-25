import React, { useEffect, useState } from 'react';
import {View, Text, Button} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
// import * as Font from 'expo-font';
import { AppLoading } from "expo";
// import { useFonts, AguafinaScript_400Regular } from '@expo-google-fonts/aguafina-script';
import { AntDesign, EvilIcons } from '@expo/vector-icons';

import logoloja from '../images/fire.png'; 

import { login } from '../../services/api';

const api = require('../../services/api');

const axios = require('axios');

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

import styles from './styles';


export default function Entrada({navigation}) {
    const [ email, setEmail ] = useState("");

    const [ senha, setSenha ] = useState("");

    const emailHandler = ( value ) => {
        setEmail( value );
    }

    const senhaHandler = ( value ) => {
        setSenha( value );
    }

    const login = async () => {
        if ( email && senha ){
            let params = {
                email,
                senha
            }        

            let response;

            try {
                response = await api.loginCliente(params);
                
                // if ( response.status === 201 ){
                if ( response ){
                    alert("Cliente logado.");

                    console.log(response.data);
                }
            } catch (error) {
                console.log("Cliente bau au");

                try {
                    response = await api.loginPrestadorServicos(params);

                    if ( response.status === 201 ){
                        alert("Prestador de serviços logado.");

                        console.log(response.data);
                    }
                } catch (error) {
                    alert("Usuário ou senha inválidos.");
                }
            }
        }
        else {
            alert("Informe os dados nos campos.");
        }
    }

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
                        <TextInput placeholder="Digite seu email" onChangeText={ valor => emailHandler( valor )}></TextInput>
                    </Usuario>

                    <Senha>
                        <EvilIcons name="lock" size={35} color="black" />
                        <TextInput placeholder="Digite seu email"  onChangeText={ valor => senhaHandler( valor )}></TextInput>
                    </Senha>
                </ContainerInput>

                <ContainerBotao>
                    <BotaoEntrar onPress={ () => login() }><Text style={{fontSize: 30, color: "#FFF"}}>Entrar</Text></BotaoEntrar>
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