import React from 'react';

import { EvilIcons, AntDesign, MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';

console.log(api);

import { 
    Bold,
    BotaoMinha, BotaoTodos, BotaoLike, BotaoChat,
    Card, CardBody, CardFooter,
    CardHeader, Chat,
    ContainerAtendimento, 
    ContainerTitulo, 
    Descricao, Detalhes,
    Emojis,
    Header, 
    Titulo, 
    Like,
    ConjuntoEsquerdo, 
    User, Username,
    Valor, ValorRecebido,
  

} from './styles';

import { Button, Text } from 'react-native';

import Avatar from '../../images/15.png';

export default function Atendimentos() {
    return (
        <ContainerAtendimento>
            <Header>
                <ContainerTitulo>
                    <Titulo>Atendimentos</Titulo>
                </ContainerTitulo>

                <ConjuntoEsquerdo>
                    <BotaoTodos><Text>Todos</Text></BotaoTodos>
                    <BotaoMinha><Text>Solucionados</Text></BotaoMinha>
                </ConjuntoEsquerdo>
                
            </Header>

            <Card>
                <CardHeader>
                    <User source={Avatar}/>
                    <Descricao>
                        <Bold>Você</Bold> atendeu <Bold>Fulano</Bold>
                    </Descricao>
                </CardHeader>

                <CardBody>
                    <Username>Rodrigo Rocha</Username>
                </CardBody>

                <CardFooter>
                    <Detalhes>
                        <ValorRecebido>R$ 20,00 |</ValorRecebido>
                       <EvilIcons name="lock" size={20}></EvilIcons>
                       <Valor>Há 2 meses</Valor>
                    </Detalhes>

                    <Emojis>
                        <BotaoLike>
                            <AntDesign name="hearto" size={20}/>
                        </BotaoLike>
                        <Like>0</Like>
                        
                        <BotaoChat>
                            <MaterialIcons name="chat-bubble-outline" size={20} color="black" />
                        </BotaoChat>

                        <Chat>0</Chat>
                    </Emojis>
                </CardFooter>

               
               

                
            </Card>

            {/* <Button
                title="OK"
                focused={focused}
            />
         */}
            

        
            
        </ContainerAtendimento>
    );

}