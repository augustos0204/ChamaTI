import React, {useRef, useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Camera } from 'expo-camera';
import { MaterialIcons, FontAwesome5, MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';

const api = require('../../services/api');

export default function Cadastro({navigation}) {
    const [ sexo_id, setSexoId ] = useState("");
    const [ cep, setCep ] = useState("");
    const [ logradouro, setLogradouro ] = useState("");
    const [ bairro, setBairro ] = useState("");
    const [ cidade, setCidade ] = useState("");
    const [ estado, setEstado ] = useState("");
    const [ numero, setNumero ] = useState("");
    const [ complemento, setComplemento ] = useState("");
    const [ nome, setNome ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ senha, setSenha ] = useState("");
    const [ data_nascimento, setDataNascimento ] = useState("");
    const [ cpf, setCpf ] = useState("");
    const [ telefone, setTelefone ] = useState("");

    const sexoHandler = ( value ) => {setSexoId( value );}
    const cepHandler = ( value ) => {setCep( value );}
    const logradouroHandler = ( value ) => {setLogradouro( value );}
    const bairroHandler = ( value ) => {setBairro( value );}
    const cidadeHandler = ( value ) => {setCidade( value );}
    const estadoHandler = ( value ) => {setEstado( value );}
    const numeroHandler = ( value ) => {setNumero( value );}
    const complementoHandler = ( value ) => {setComplemento( value );}
    const nomeHandler = ( value ) => {setNome( value );}
    const emailHandler = ( value ) => {setEmail( value );}
    const senhaHandler = ( value ) => {setSenha( value );}
    const dataNascimentoHandler = ( value ) => {setDataNascimento( value );}
    const cpfHandler = ( value ) => {setCpf( value );}
    const telefoneHandler = ( value ) => {setTelefone( value );}

    // useEffect(() => {
    //     (async () => {
    //         const {status} = await Camera.requestPermissionsAsync();
    //         setHasPermission(status === 'granted');
    //     })();
    // }, []);

    const signUp = async () => {
        // if ( sexo_id && cep && logradouro && bairro && cidade && estado && numero && complemento && nome && email && senha && data_nascimento && cpf && telefone ){
            // let params = {
            //     sexo_id,

            //     cep,
            //     logradouro,
            //     bairro,
            //     cidade,
            //     estado,
            //     numero,
            //     complemento,

            //     nome,
            //     email,
            //     senha,
            //     data_nascimento,
            //     cpf,
            //     telefone
            // }        

            let params = {
                sexo_id : "1",
            
                cep : "064-123",
                logradouro : "Rua aí",
                bairro : "Bairro aí",
                cidade : "Cidade aí",
                estado : "Estado aí",
                numero : "123",
                complemento : "Casa B",
            
                nome : "Testinho Silva",
                email : "testinho@mail.com",
                senha : "123",
                data_nascimento : "2001-01-01",
                cpf : "126.456.789-09",
                telefone : "+55(11)92236-5678"
            }

            let response;

            try {
                console.log("Cliente: " + params.email + "\n" + params.senha);

                response = await api.signUpCliente(params);
                
                // if ( response.status === 201 ){
                if ( response ){
                    alert("Cliente logado.");

                    console.log(response.data);

                    navigation.navigate('Home');
                }
            } catch (error) {
                try {
                    console.log("Prestador: " + params.email + "\n" + params.senha);

                    response = await api.signUpPrestadorServicos(params);

                    if ( response.status === 201 ){
                        alert("Prestador de serviços logado.");

                        console.log(response.data);

                        navigation.navigate('Home');
                    }
                } catch (error) {
                    console.log(error);
                    alert("Usuário ou senha inválidos.");
                }
            }
        // }
        // else {
        //     alert("Informe os dados nos campos.");
        // }
    }

    const modalizeRef = useRef(null);

    function onOpen() {
        modalizeRef.current?.open();
    }

    return (
        <SafeAreaView 
            style={{alignItems: 'center', justifyContent: 'center', padding: 10}}>

            <ScrollView>
                <View style={{ marginBottom: 40 ,width: 150, height: 150, borderRadius: 75, borderColor: '#000', borderWidth: 1, alignContent: 'center', justifyContent: 'center', alignSelf: 'center', alignContent: 'center', marginTop: 20}}>
                    <MaterialIcons style={{alignSelf: 'center'}} name="photo-camera" size={50} color="black" />
                </View>

                <View style={styles.views}>
                    <FontAwesome5 name="user-alt" size={24} color="black" />
                    <TextInput style={styles.inputis} placeholder="Digite seu nome"></TextInput>
                </View>

                <View style={styles.views}>
                    <MaterialCommunityIcons name="email-outline" size={24} color="black" />
                    <TextInput style={styles.inputis} placeholder="Digite seu nome"></TextInput>
                </View>

                <View style={styles.views}>
                    <Entypo name="location" size={24} color="black" />
                    <TextInput style={styles.inputis} placeholder="Digite seu nome"></TextInput>
                </View>

                <View style={styles.views}>
                    <MaterialCommunityIcons name="file-document-box-check-outline" size={24} color="black" />
                    <TextInput style={styles.inputis} placeholder="Digite seu nome"></TextInput>
                </View>

                <View style={styles.views}>
                    <FontAwesome name="lock" size={24} color="black" />
                    <TextInput 
                        autoCorrect={false}
                        style={styles.inputis} placeholder="Digite seu nome"></TextInput>
                </View>

                <View>
                    <TouchableOpacity 
                        onPress={() => signUp()}
                        style={styles.botao}> 
                        <Text style={{ alignSelf: 'center', fontSize: 20}}>Cadastrar</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        onPress={onOpen}
                    >
                        <Text>Mostrar</Text>
                    </TouchableOpacity>

                    <Modalize
                        ref={modalizeRef}
                        snapPoint={80}
                    ></Modalize> */}
                </View>
            </ScrollView>
         
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    views: {
        flexDirection: 'row',
        marginBottom: 30,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20,
       
        
    },

    inputis:{
        width: '75%',
        height: 30,
        marginLeft: 30,
        borderWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: '#000',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        alignSelf: 'flex-start',
        paddingTop: 1,
      
    },

    botao: {
        width: 150,
        height: 30,
        borderRadius: 10,
        backgroundColor: '#F87700',
        alignItems: 'center'
      
    }

});



   {/* <View>
                <Camera
                    style={{flex: 1}}
                    type={type}
                />
            </View>

            <TouchableOpacity>
                <Text>Abrir modal</Text>
            </TouchableOpacity>

            <Modalize
                ref={modalizeRef}
                snapPoint={500}
                modalHeight={500}
            >
                <View style={{
                    flex: 1,
                    height: 180,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}>


                </View>

            </Modalize> */}