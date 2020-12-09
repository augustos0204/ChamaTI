import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import teste from '../../images/11.png'

import { Container, Wrapper, Option, Img, Label} from './styles';

export default function HomePrincipal() {
    return (
        <Wrapper>
            <Container>
                <Option>
                    <Img source={teste}/>
                    <Label>TEste</Label>
                </Option>
            </Container>
        </Wrapper>

        
 
    );
}