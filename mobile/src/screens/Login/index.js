import React from 'react';
import { Text, View, Button, SafeAreaView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { BotaoCadastro, 
        ContainerLogo, 
        CaixaNome, 
        ImageLogo, 
        LogoLoja } 

        from './styles';

import Logo from '../../images/fire.png';

export default function Login({navigation}) {
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
                    keyboardType={"email-address"}
                />
           </View>

           <View style={{flexDirection: 'row'}}>
                <AntDesign style={{paddingRight: 30, paddingLeft: 20}} name="lock" size={24} color="black" />
               <TextInput
                    placeholder="Digite sua senha"
                    autoCorrect={false}
                    autoFocus={true}
                    secureTextEntry={true}
                    style={styles.input}
                />
           </View>
       </View>

            <BotaoCadastro
                onPress={() => navigation.navigate('Home')}
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