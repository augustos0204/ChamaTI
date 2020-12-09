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

const TableService = ({post}) => {
    const History = useHistory();
    const redirectHome = () => {
        return History.push("/home");
    }
    
    const formataData = () => {
        const data = post.data_hora_abertura;

        console.log(data);
    }

    formataData();

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
                {post.problema}
            </TitleService>
            <DescricaoProblema>
                {post.descricao}
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

const Detalhes = (props) => {
    const [serviceData, setServiceData] = useState({
        id: 1,
        problema: "none",
        descricao: "Não há descrição",
        data_hora_abertura: "0000-00-00 00:00",
        data_hora_encerramento: null,
        em_aberto: 1,
        em_atendimento: 0,
        resolvido_por: null,
        CreatedAt: "0000-00-00 00:00",
        updatedAt: "0000-00-00 00:00",
        ClienteId: null
    });
   
    const getServiceData = async() => {
        try {
            const response = (await searchServiceById(props.serviceId)).data;
            setServiceData(response);
        } catch (error) {
            if(error.response){
                window.alert(error.response.data.erro);
            }
        }
    }

    useEffect(() => {
        getServiceData();
    });

    return (
        <TableService post={serviceData}/>
    );
}

export default Detalhes;