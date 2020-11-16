import React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import ContainerHistorico from '../../components/ContainerHistorico';
import MarcadorGeral from '../../components/MarcadorGeral';

import {
BotoesPrincipal, BotaoAnterior, BotaoAndamento, Date,


} from './styles';




export default function Historico() {
    return (
        <>
            <ScrollView>

                <MarcadorGeral/>

                    <BotoesPrincipal>
                        <BotaoAnterior><Text>Anterior</Text></BotaoAnterior>
                        <BotaoAndamento><Text>Em andamento</Text></BotaoAndamento>
                    </BotoesPrincipal>

                    <Date>Sáb, 15 de agosto 2020</Date>
                    <ContainerHistorico/>
                    

                    <Date>Ter, 30 de junho 2020</Date>
                    <ContainerHistorico/>

                    <Date>Ter, 30 de junho 2020</Date>
                    <ContainerHistorico/>

            </ScrollView>
        </>
        
        
        
        

    );
}