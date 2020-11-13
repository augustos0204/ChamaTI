import React from 'react';
import { Button, Label } from './styles';
import { Entypo } from '@expo/vector-icons';

import { TouchableWithoutFeedback } from 'react-native';

export default function BotaoPedir({ focused }) {
    return (

        // <TouchableWithoutFeedback>
            <Button
                colors={
                    focused
                        ? ['#000', '#ccc']
                        : ['#ffa500', '#e69e19']
                }
                start={[1, 0.8]}
            >
                <Entypo 
                    name="tools" 
                    size={25} 
                    color={focused ? '#fff' : '#000'}/>

                <Label focused={focused}>Pedir</Label>            
            </Button>
        // {/* </TouchableWithoutFeedback> */}

   
    );
}