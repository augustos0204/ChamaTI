import React from 'react'
import { Text } from 'react-native'
import Estilo from '../styles'

export default props => {
       return (
           <>
                <Text style={Estilo.txtGrande}>{props.a}</Text>
                <Text style={Estilo.txtGrande}>{props.b}</Text>
            </>
       )
}