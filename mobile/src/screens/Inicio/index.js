import React from 'react';
import { Text } from 'react-native';
import { Container, Wrapper } from './styles';

import Sugestoes from '../../components/Sugestoes';
import Atendimentos from '../../components/Atendimentos';
import Marcador from '../../components/MarcadorGeral';

export default function Inicio() {
    return (
        <Wrapper>
            <Container>
              <Marcador></Marcador>
                  

                <Sugestoes/>

                <Atendimentos/>
    
            </Container>
        </Wrapper>
    );
}