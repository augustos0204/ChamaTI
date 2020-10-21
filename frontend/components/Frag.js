import React from 'react';
import { Text, View, View3 } from 'react-native';
import Estilo from './styles';

export default props => {
    return (
        <View>
            <Text style={Estilo.txtGrande}>{props.principal}</Text>
            <Text>{props.secundaria}</Text>
        </View>
    )
}