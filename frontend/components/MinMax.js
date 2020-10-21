import React from 'react';
import { Text } from 'react-native';

import Estilo from './styles';

export default (props) => {
	console.warn(props);
   	return (
 	<Text style={Estilo.txtGrande}>
     	O valor {props.max} é maior que o valor {props.min}
 	</Text>
	)
}