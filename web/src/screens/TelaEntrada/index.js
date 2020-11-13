import React from 'react';
import {View, Text, Button} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
// import * as Font from 'expo-font';
import { AppLoading } from "expo";
import { useFonts, AguafinaScript_400Regular } from '@expo-google-fonts/aguafina-script';

import logoloja from '../images/fire.png'; 

import { 
    BotaoCadastrar, BotaoEntrar,
    ContainerBotao, ContainerInput,
    InfoLoja,
    LogoLoja,
    NomeLoja,
    Footer,

} from './styles';


export default function Entrada({navigation}) {
    
    let [fontLoaded] = useFonts({
        AguafinaScript_400Regular,

        "insta": require("../../../assets/fonts/Billabong.ttf")
    });

    if(!fontLoaded) {
        return <AppLoading/>;
    }

    return (
        <View>
            <ScrollView>
                <InfoLoja>
                    
                    <NomeLoja>CHAMAti</NomeLoja>

                    <LogoLoja source={logoloja}/>

                </InfoLoja>

                <ContainerInput>
                    {/* <Usuario>
                        
                    </Usuario>

                    <Senha>

                    </Senha> */}
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