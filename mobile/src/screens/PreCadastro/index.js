import React from 'react';
import { View, Text, Button, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { MaterialIcons, Fontisto, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default function PreCadastro({navigation}) {
    return (
            <SafeAreaView style={{height: '100%', justifyContent:'center', alignItems: 'center', backgroundColor: '#FDB147'}}>

                <ScrollView>
                    <View 
                        style={{ width: '85%', height: '90%', borderRadius: 20, 
                        backgroundColor: '#FFF', marginTop: 20, alignSelf: 'center', alignItems: 'center', padding: 8}}>

                            <Text style={{color: '#F87700', fontSize: 30, marginBottom: 10}}>ChamaTi</Text>

                            <Text style={{fontSize: 18, textAlign: 'center', color: '#000'}}>Para se tornar um Supporter e embarcar nessa jornada com a ChamaTi,
                            você deve seguir os seguintes passos.</Text>

                            <View style={{flexDirection: 'row', marginTop: 30}}>
                                <MaterialIcons style={{ marginLeft: 30, marginRight: 10, marginTop: 7}} name="email" size={30} color="#F87700" />
                                <Text style={{fontSize: 18, textAlign: 'auto', color: '#000'}}>Informe seu nome completo e e-mail a seguir.</Text>
                            </View>

                            <View style={{flexDirection: 'row', marginTop: 30, alignSelf: 'flex-start'}}>
                                <Fontisto style={{marginRight: 30}} name="earth" size={30} color="#3E82FC" />
                                <Text style={{fontSize: 18, textAlign: 'left', color: '#000'}}>Digite seu CEP e CPF.</Text>
                            </View>

                            <View style={{flexDirection: 'row', marginTop: 30, alignSelf: 'flex-start'}}>
                                <MaterialCommunityIcons style={{marginRight: 30}} name="shield-lock" size={35} color="black" />
                                <Text style={{fontSize: 18, textAlign: 'left', color: '#000'}}>Criar uma senha.</Text>
                            </View>

                            <View style={{flexDirection: 'row', marginTop: 30, alignSelf: 'flex-start'}}>
                                <Entypo style={{marginRight: 20, marginTop: 5}} name="chat" size={35} color="black" />
                                <Text style={{width: '90%' ,fontSize: 18, textAlign: 'left', color: '#000'}}>Checar seu e-mail e clicar no link 
                                enviado para concluir seu cadastro.</Text>
                            </View>


                        <TouchableOpacity
                            style={{width: 300, height: 40, marginTop: 50, backgroundColor: 'green', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}
                            onPress={() => navigation.navigate('TelaCadastro')}
                        >
                            <Text style={{fontSize: 20, color: '#FFF'}}>Ok, vamos ganhar dinheiro</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
    );
}