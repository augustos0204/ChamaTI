import React from "react";

import {
    ContainerConteudoPage
} from "./style";
import Header from "../../components/menu/header";

import Detalhes from "../../components/detalhes/detalhes";

const DetalhesServices = () => {
    const serviceId = (new URL(window.location.href)).searchParams.get("serviceId");
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
                    <Detalhes serviceId={serviceId}/>
                </ContainerConteudoPage>
            </container>
        </container>
    );
}

export default DetalhesServices;