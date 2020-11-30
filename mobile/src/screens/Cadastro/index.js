import React, {useRef, useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Camera } from 'expo-camera';
import { MaterialIcons, FontAwesome5, MaterialCommunityIcons, Entypo, FontAwesome, Foundation, Fontisto } from '@expo/vector-icons';


export default function Cadastro({navigation}) {

    // const [type, setType] = useState(Camera.Constants.Type.back);

    // const [hasPermission, setHasPermission] = useState(null);

    // useEffect(() => {
    //     (async () => {
    //         const {status} = await Camera.requestPermissionsAsync();
    //         setHasPermission(status === 'granted');
    //     })();
    // }, []);

    // if(hasPermission === null) {
    //     return <View/>;
    // }

    // if(hasPermission === false) {
    //     return <Text>Acesso negado</Text>;
    // }

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
                    <TextInput style={styles.inputis} placeholder="Digite seu email"></TextInput>
                </View>

                <View style={styles.views}>
                    <Entypo name="location" size={24} color="black" />
                    <TextInput 
                        style={styles.inputis} 
                        placeholder="Digite seu CEP"
                        keyboardType={"numeric"}
                        ></TextInput>
                </View>

                <View style={styles.views}>
                    <MaterialCommunityIcons name="file-document-box-check-outline" size={24} color="black" />
                    <TextInput 
                        style={styles.inputis} 
                        placeholder="Digite seu CPF"
                        keyboardType={"numeric"}
                        ></TextInput>
                </View>

                <View style={styles.views}>
                    <FontAwesome name="intersex" size={24} color="black" />
                    <TextInput 
                        autoCorrect={false}
                        style={styles.inputis} placeholder="Sexo"></TextInput>
                </View>

                <View style={styles.views}>
                    <Foundation name="telephone" size={24} color="black" />
                    <TextInput 
                        autoCorrect={false}
                        style={styles.inputis} placeholder="Digite seu telefone"
                        keyboardType={"numeric"}
                        ></TextInput>
                </View>

                <View style={styles.views}>
                    <Fontisto name="date" size={22} color="black" />
                    <TextInput 
                        autoCorrect={false}
                        style={styles.inputis} 
                        placeholder="Digite data de nascimento"
                        keyboardType={"numeric"}
                        ></TextInput>
                </View>

                <View style={{alignSelf: 'center', marginTop: 10, marginBottom: 30}}>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('TelaModalConfirma')}
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