import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import ContainerHistorico from '../../components/ContainerHistorico';

export default function Historico() {
    return (
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
                <TouchableOpacity
                    style={{}}
                >
                    <Text>t6este</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>Teste</Text>
                </TouchableOpacity>
            </View>
            <ContainerHistorico/>
        </View>
    );
}