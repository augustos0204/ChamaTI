import React from  'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import 
    { ContainerPrincipal, 
        Header, 
        Body, 
        Footer, 
        NameLoja, 
        LocalLoja, 
        StatusPedido, 
        NumPedido,
        Numservico,
        Num,
        Servico,
    } 
        from './styles';

import FotoLoja from '../../images/11.png';

export default function ContainerHistorico() {
    return (
            <>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: 10}}>Sáb, 15 de Agosto 2020</Text>
                    <ContainerPrincipal>
                        <Header>
                            <Image source={FotoLoja}/>
                                <View style={{flexDirection: 'column', marginLeft: 5, marginTop: 5}}>
                                    <NameLoja>Loja da Infotec - <LocalLoja>São Paulo</LocalLoja></NameLoja>
                                    <StatusPedido>Pedido Concluido - <NumPedido>7452</NumPedido></StatusPedido>
                                </View>
                        </Header>

                        <Body>
                           <Numservico>
                               <Num>1</Num>

                               <Servico> Teste</Servico>
                           </Numservico>

                           <Numservico>
                               <Num>1</Num>

                               <Servico> Teste</Servico>
                           </Numservico>

                           <Numservico>
                               <Num>1</Num>

                               <Servico> Teste</Servico>
                           </Numservico>

                           <Numservico>
                               <Num>1</Num>

                               <Servico> Teste</Servico>
                           </Numservico>

                        </Body>

                        <Footer>

                            {/* <Stars>

                            </Stars> */}

                            <TouchableOpacity>
                                <Text>Tvddjv</Text>
                            </TouchableOpacity>

                        </Footer>
                    </ContainerPrincipal>

                    
                
            </>
    );
}