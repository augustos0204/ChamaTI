import React from 'react';
import { Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { Button, Label} from './styles';

export default function BotaoPedir({focused}){
    return(
        <Button
           colors={
               focused
               ? ['#FF7200', '#FF7200']
               : ['#FF7200', '#FF7200']
           }
           start={[1, 0.2]}
        >
            <Entypo name="tools" size={24} color={focused ? '#FFF':'#000'} />
            <Label focused={focused}>Pedir</Label>
        </Button>
    );
}