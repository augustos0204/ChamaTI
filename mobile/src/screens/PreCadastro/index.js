import React from 'react';
import { View, Text, Button, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { MaterialIcons, Fontisto, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default function PreCadastro({navigation}) {
    return (
            

                        <TouchableOpacity
                            style={{width: 300, height: 40, marginTop: 50, backgroundColor: 'green', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}
                            onPress={() => navigation.navigate('TelaCadastro')}
                        >
                            <Text style={{fontSize: 20, color: '#FFF'}}>Arrumando</Text>
                        </TouchableOpacity>
    );
}