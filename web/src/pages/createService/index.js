import React, { useState } from "react";
import {api} from "../../services/api";

import Header from "../../components/menu/header"

import {
    FormularioServico,
    CampoTextFormulario,
    TextCampo,
    CampoProblemaDescricao,
    ButtonEnviar
} from "./style";

const MakeService = () => {

    const [dataService, setDataService] = useState({
        problema : "",
        descricao : "",
        data_hora_abertura : "",
        data_hora_encerramento : null,
        em_aberto : true,
        em_atendimento : false,
        resolvido_por : null
    });

    const handlerInput = (e) => {
        setDataService({...dataService, [e.target.id]: e.target.value})

        console.log(dataService);
    }

    const registerService = async (e) => {
        e.preventDefault();
        
        const insertData = () => {
            const datetime = new Date().toISOString().slice(0, 19).replace('T', " ");
            dataService.data_hora_abertura = datetime;
        }
        
        insertData();

        try {
            const response = await api.post("/cliente/servico", dataService);
            if (response.status === 201){
                return window.alert("Serviço registrado com sucesso!");
            }
        } catch (error) {
            if (error.response){
                return window.alert(error.response.data.erro);
            }
        }
    }

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
                    <FormularioServico onSubmit={registerService}>
                        <TextCampo>
                            Titulo do problema:
                        </TextCampo>
                        <CampoTextFormulario id="problema" type="text" onChange={handlerInput}/>
                        <TextCampo>
                            Descrição do Problema:
                        </TextCampo>
                        <CampoProblemaDescricao id="descricao" onChange={handlerInput}/>
                        <ButtonEnviar type="submit"/>
                    </FormularioServico>
                </containerConteudoPage>
            </container>
        </container>
    )
}

export default MakeService;
