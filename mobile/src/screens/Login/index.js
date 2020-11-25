import React, { useState } from 'react';
import { Text, View, Button, SafeAreaView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const api = require('../../services/api');

import { BotaoCadastro, 
        ContainerLogo, 
        CaixaNome, 
        ImageLogo, 
        LogoLoja } 

        from './styles';

import Logo from '../../images/fire.png';

export default function Login({navigation}) {
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
                console.log("Cliente: " + params.email + "\n" + params.senha);

                response = await api.loginCliente(params);
                
                // if ( response.status === 201 ){
                if ( response ){
                    alert("Cliente logado.");

                    console.log(response.data);

                    navigation.navigate('Home');
                }
            } catch (error) {
                try {
                    console.log("Prestador: " + params.email + "\n" + params.senha);

                    response = await api.loginPrestadorServicos(params);

                    if ( response.status === 201 ){
                        alert("Prestador de serviços logado.");

                        console.log(response.data);

                        navigation.navigate('Home');
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

    return(

    <SafeAreaView style={{flex: 1}}>
        <ContainerLogo style={{flex: 1}}>
            <Text style={{color: '#F87700', fontSize: 40}}>ChamaTi</Text>
            <LogoLoja source={Logo}/>
        </ContainerLogo>

       <View style={{flex: 1}}>
           <View style={{flexDirection: 'row', marginBottom: 30}}>
                <AntDesign style={{paddingRight: 30, paddingLeft: 20}} name="user" size={24} color="black"/>
               <TextInput 
                    placeholder="Digite seu email"
                    style={styles.input}
                    onChangeText={ valor => emailHandler( valor )}
                />
           </View>

           <View style={{flexDirection: 'row'}}>
                <AntDesign style={{paddingRight: 30, paddingLeft: 20}} name="lock" size={24} color="black" />
               <TextInput
                    placeholder="Digite sua senha"
                    autoCorrect={false}
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={ valor => senhaHandler( valor )}
                />
           </View>
       </View>

            <BotaoCadastro
                onPress={ () => login() }
            >
                <Text style={{fontSize: 25, color: 'black'}}>Login</Text>
            </BotaoCadastro>


            <BotaoCadastro
                onPress={() => navigation.navigate('TelaPreCadastro')}
            >
                <Text style={{fontSize: 25, color: 'black'}}>Cadastre-se</Text>
            </BotaoCadastro>

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text>Esqueceu sua senha?</Text>
                <TouchableOpacity><Text style={{color: '#F87700'}}> Clique aqui</Text></TouchableOpacity>
            </View>

    </SafeAreaView>
    );
} 

const styles = StyleSheet.create({

    input:{
        width: '75%',
        height: 25,
        borderStyle: "solid",
        borderWidth: 1,
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#000'

    },
})