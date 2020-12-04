import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {
    ButtonVoltar,
    TitleService,
    DescricaoProblema,
    ContainerCabecalho,
    ContainerDataService,
    ContainerIconeRelogio,
    ContainerTextData,
    StatusService,
    ClientInformation,
    UserContainer,
    PhotoSide,
    InfoSide,
    UserType,
    UserName
} from "./style";

import ClockImage from "../../assets/clock.png"

import photoProfile from "../../assets/perfilPadrão.jpg";

import {searchServiceById} from "../../services/api";

const Detalhes = () => {
    const History = useHistory();
    const redirectHome = () => {
        return History.push("/home");
    }

    const [serviceData, setServiceData] = useState(null);
   
    const getServiceData = async() => {
        try {
            const response = (await searchServiceById(2)).data;
            setServiceData(response);
        } catch (error) {
            if(error.response){
                window.alert(error.response.data.erro);
            }
        }
    }

    useEffect(() => {
        getServiceData();
    }, []);

    return (
        <container>
            <ContainerCabecalho>
                <ButtonVoltar onClick={redirectHome}>
                    Voltar
                </ButtonVoltar>
                <ContainerDataService>
                    <ContainerIconeRelogio>
                        <img src={ClockImage} alt="Relógio de um relógio" title="Relógio de um relógio"/>
                    </ContainerIconeRelogio>
                    <ContainerTextData>
                        2020-10-05 00:00
                    </ContainerTextData>
                </ContainerDataService>
            </ContainerCabecalho>
            <TitleService id="tituloProblema">
                Não sei
            </TitleService>
            <DescricaoProblema>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </DescricaoProblema>
            <StatusService>
                Status: Em Aberto.
            </StatusService>
            <ClientInformation>
                <UserContainer>
                    <PhotoSide>
                        <img src={photoProfile} alt="Foto Cliente" title="Foto Cliente"/>
                    </PhotoSide>
                    <InfoSide>
                        <UserType>
                            Cliente
                        </UserType>
                        <UserName>
                            Mauricio de souza
                        </UserName>
                    </InfoSide>
                </UserContainer>
                <UserContainer>
                    <PhotoSide>
                        <img src={photoProfile} alt="Foto Cliente" title="Foto Cliente"/>
                    </PhotoSide>
                    <InfoSide>
                        <UserType>
                            Prestador
                        </UserType>
                        <UserName>
                            Mauricio de souza
                        </UserName>
                    </InfoSide>
                </UserContainer>
            </ClientInformation>
        </container>
    );
}

export default Detalhes;