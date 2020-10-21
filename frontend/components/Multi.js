import React from 'react';
import { Text } from 'react-native';

import Estilo from './styles';

export default () => {
    
    return (
        <Text style={Estilo.txtGrande}>Comp #01</Text>
    )
}

export function Comp02() {
    return <Text>Comp #02</Text>
}

export function Comp03() {
    return <Text>Comp #02</Text>
}
