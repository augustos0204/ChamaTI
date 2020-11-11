import React from 'react';
import { Text, SafeAreaView, Button} from 'react-native';
import fotoAvatar from '../../images/15.png';
import { Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaDados from '../../components/Anterior';
import MarcadorConta from '../../components/MarcadorConta';
import IconInfo from '../../images/17.png';



import {
    Avatar,
    CaixaInfo, CardInfo, ContainerInfo, ContainerLocal, ContainerDados,
    InfoImage,
    Label, LabelTitle, Local,
    Name, Next,


} from './styles';

const Stack = createStackNavigator();

export default function Conversas() {
    return (
        
            <ScrollView>
                <MarcadorConta/>

                <ContainerInfo>
                    <Avatar source={fotoAvatar}/>
                        <Name>Rodrigo Rocha</Name>

                        <ContainerLocal>
                            <Entypo name="location" size={20} color="black" />
                            <Local>São Paulo</Local>
                        </ContainerLocal>

                </ContainerInfo>

                <ContainerDados>
                    <CaixaInfo>
                        <InfoImage source={IconInfo}/>

                        <CardInfo>
                            <LabelTitle>Meus Dados</LabelTitle>
                            <Label>Informações Pessoais</Label>
                        </CardInfo>

                        <Next>
                            <MaterialIcons name="navigate-next" size={24} color="black" />
                        </Next>
                        
                    </CaixaInfo>

                    <CaixaInfo>
                        <InfoImage source={IconInfo}/>

                        <CardInfo>
                            <LabelTitle>Meus Dados</LabelTitle>
                            <Label>Informações Pessoais</Label>
                        </CardInfo>

                        <Next>
                            <MaterialIcons name="navigate-next" size={24} color="black" />
                        </Next>
                        
                    </CaixaInfo>

                    <CaixaInfo>
                        <InfoImage source={IconInfo}/>

                        <CardInfo>
                            <LabelTitle>Meus Dados</LabelTitle>
                            <Label>Informações Pessoais</Label>
                        </CardInfo>

                        <Next>
                            <MaterialIcons name="navigate-next" size={24} color="black" />
                        </Next>
                        
                    </CaixaInfo>
                
                </ContainerDados>
                
            </ScrollView>


          

    );
}