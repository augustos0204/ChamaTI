import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import ContainerHistorico from '../../components/ContainerHistorico';

export default function Historico() {
    return (
        <ScrollView>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', 
            marginTop: 20, marginBottom: 30}}>
                <TouchableOpacity
                >
                    <Text>t6este</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>Teste</Text>
                </TouchableOpacity>
            </View>
            <ContainerHistorico/>
        </ScrollView>
    );
}