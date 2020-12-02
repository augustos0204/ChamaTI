import React from "react";
import {
    ContainerConteudoPage,
    ButtonVoltar,
    TitleService,
    DescricaoProblema,
    ContainerCabecalho,
    ContainerDataService,
    ContainerIconeRelogio,
    ContainerTextData,
    ClientInformation
} from "./style";
import Header from "../../components/menu/header";

import ClockImage from "../../assets/clock.png"

const redirectHome = () => {
    document.location.href = `http://localhost:3000/home`;
}

const DetalhesServices = () => {
    return (
        <container>
            <Header tela="Detalhes"/>
            <container style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <ContainerConteudoPage>
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
                        <TitleService>
                            Titulo do problema
                        </TitleService>
                        <DescricaoProblema>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </DescricaoProblema>
                        <ClientInformation>
                            
                        </ClientInformation>
                    </container>
                </ContainerConteudoPage>
            </container>
        </container>
    );
}

export default DetalhesServices;