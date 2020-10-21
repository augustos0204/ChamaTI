import React, {useState} from 'react';
import { Text, Button } from 'react-native';

import Estilo from './styles';

export default ({ inicial = 0, passo = 1}) => {
    // let numero = props.inicial;
    const [numero, setNumero] = useState(inicial)

    const somar = () => setNumero(numero + passo)
    const diminuir = () => setNumero(numero - passo)
    
    return (
        <>
            <Text style={Estilo.txtGrande}>{numero}</Text>
            <Button title="+" onPress={somar}></Button>
            <Button title="-" onPress={diminuir}></Button>
        </>
    )
}