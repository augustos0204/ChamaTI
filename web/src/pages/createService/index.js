import React from "react";

import Header from "../../components/menu/header"

import {
    FormularioServico,
    CampoTextFormulario
} from "./style";

const MakeService = () => {
    return (
        <container>
            <Header tela="Criar Serviço"/>
            <container style={{
                display: "block",
                width: "1000px",
                minHeight: "100px",
                height: "auto",
                margin: "0 auto",
                paddingTop: "70px",
                
            }}>
                <containerConteudoPage className="containerConteudoPage" style={{
                    backgroundColor: "transparent",
                }}>
                    <FormularioServico>
                        <CampoTextFormulario type="text"/>
                    </FormularioServico>
                </containerConteudoPage>
            </container>
        </container>
    )
}

export default MakeService;
