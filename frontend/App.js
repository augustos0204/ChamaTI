import React from 'react';

import { 
    Image,
    KeyboardAvoidingView,
    View, 
    StyleSheet, SafeAreaView,
    Text, TextInput, TouchableOpacity 
} 
from 'react-native';

import Pai from './components/indireta/Pai';
// import Pai from './components/direta/Pai';
// import Botao from './components/Botao';
// import X, { Comp02, Comp03 } from './components/Multi';
//import MinMax from './components/MinMax';
//import Aleatorio from './components/Aleatorio';
//import Titulo from './components/Titulo';
// import Contador from './components/Contador';


export default () => (
        <View style={style.App}>
            <Pai/>
            {/* <Titulo principal="Cadastro Produto" secundario="Tela de cadastro de produto"></Titulo> */}
            {/* <MinMax min={3} max={20}/> */}
            {/* <MinMax/>
            <Contador inicial={100} passo={13}/>
            <Contador/>
            <Botao/>
            <Aleatorio min={10} max={60}/>
            <MinMax/> */}
            {/* <X/>
            <Comp02/>
            <Comp03/> */}
        </View> 
);

const style = StyleSheet.create ({
    App: {
        // backgroundColor: '#A00',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        
    }
})
            
        // <KeyboardAvoidingView style={styles.background}>
        //     <View style={styles.containerLogo}>
        //         <Image style={styles.imagem} source={require('./images/fire.png')}/>
        //     </View>
 
        //     <View style={styles.container}>
        //         <TextInput style={styles.input} placeholder="Email" autoCorrect={false} onChangeText={() => {}}/>
        //         <TextInput style={styles.input} placeholder="Senha" autoCorrect={false} onChangeText={() => {}}/>

        //         <TouchableOpacity style={styles.btnSubmit}>
        //           <Text style={styles.btnSubmitText}>Entrar</Text>
        //         </TouchableOpacity>

        //         <TouchableOpacity style={styles.btnRegister}>
        //           <Text style={styles.btnRegisterText}>Criar Conta</Text>
        //         </TouchableOpacity>
        //     </View>

        // </KeyboardAvoidingView>


// const styles = StyleSheet.create ({
//     background: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#FFF'
        
//     },

//     containerLogo: {
//         flex: 1,
//         justifyContent: 'center',
//     },

//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '90%'

//     },

//     imagem: {
//         width: 200,
//         height: 200,
//     },

//     input: {
//         backgroundColor: '#F87700',
//         width: '90%',
//         marginBottom: 15,
//         color: '#222',
//         fontSize: 17,
//         borderRadius: 7,
//         padding: 10,
//     },  
    
//     btnSubmit: {
//         backgroundColor: '#F87700',
//         width: '90%',
//         height: 45,
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 7,
//         marginBottom: 10
//     },

//     btnSubmitText: {
//         color: '#FFF',
//         fontSize: 18,
//     },

//     btnRegister: {
//        marginTop: 10,

//     },

//     btnRegisterText: {
//         color: 'black',
//     },
// });