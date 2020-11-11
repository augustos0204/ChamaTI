import React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons';

import FotoLoja from '../../images/16.png';

import {
    BtnDetalhes,
    CardHeader, CardBody, CardFooter,
    ContainerHistorico,
    InfoStore,
    LabelDetalhes,
    NumServico,
    SeguraContainer,
    StorePhoto, StoreName, StatusPedido,
    Servico, Stars,
    TipoServico,

} from './styles';

export default function Historico() {
    return (
        <>
            

            <SeguraContainer>
                <ContainerHistorico>
                    <CardHeader>
                        <StorePhoto source={FotoLoja}/>
                        <InfoStore>
                            <StoreName>-  São Paulo</StoreName>

                            <StatusPedido> Pedido concluido </StatusPedido>
                        </InfoStore>

                    </CardHeader>

                    <CardBody>
                        <Servico>

                            <NumServico>
                                <Text>1</Text>
                                
                            </NumServico>

                            <TipoServico>
                                <Text>Formatação de Pc</Text>
                            </TipoServico>

                        </Servico>

                        <Servico>
                            <NumServico>
                                <Text>2</Text>
                                
                            </NumServico>

                            <TipoServico>
                                <Text>Hard Reset Samsung</Text>
                            </TipoServico>

                        </Servico>

                  

                        <Stars>
                            <EvilIcons name="star" size={30} color="black" />
                            <EvilIcons name="star" size={30} color="black" />
                            <EvilIcons name="star" size={30} color="black" />
                            <EvilIcons name="star" size={30} color="black" />
                            <EvilIcons name="star" size={30} color="black" />

                        </Stars>


                        

                    </CardBody>

                    <CardFooter>
                        <BtnDetalhes><LabelDetalhes>Detalhes</LabelDetalhes></BtnDetalhes>
                        
                    </CardFooter>

                </ContainerHistorico>
            </SeguraContainer>
        </>
        
        

    );
}