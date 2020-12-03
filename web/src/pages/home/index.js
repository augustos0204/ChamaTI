import React, { useEffect, useState } from "react";

import {useHistory} from "react-router-dom";

import Header from "../../components/menu/header";

import perfilPadrao from "../../assets/perfilPadrão.jpg";

import { getClientLogedServices, searchUser } from "../../services/api";

import {
    ContainerIntroductionServices,
    DetalhesButton, ContainerInfoPessoa,
    ContainerGeralPedido, DescricaoProblema,
    TituloProblema,
    ImagePessoaIcon,
    TextoInformativoPessoa,
    TextoInformativoStatus,
    ContainerConteudoPage
} from "./style";

const CardServices = ({ post }) => {
    const History = useHistory();
    const [autor, setAutor] = useState([]);

    const redirectDetalhes = (service) => {
        return History.push(`/services/detalhes?serviceId=${service}`);
    }

    const getAutorData = async () => {
        try {
            const response = await (await searchUser(post.ClienteId)).data;

            setAutor(response);
        } catch (error) {
            if(error.response){
                console.log(error.response.data.erro);
            }
        }
    }

    let image = perfilPadrao;

    if (autor.foto != null){
        image = autor.foto;
    }

    getAutorData();

    return (
        <ContainerIntroductionServices>
            <ContainerInfoPessoa>
                <ImagePessoaIcon>
                    <img src={image} alt="foto do perfil" title="foto do perfil"/>
                </ImagePessoaIcon>
                <TextoInformativoPessoa>
                    {autor.nome} - São Paulo
                </TextoInformativoPessoa>
                <TextoInformativoStatus>
                    Serviço em aberto

                    <separador style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: "orange",
                        display: "block",
                        marginLeft: "10px",
                        marginRight: "10px",
                        borderRadius: "100%",
                    }} />

                    {post.id}    
                </TextoInformativoStatus>
            </ContainerInfoPessoa>
            <ContainerGeralPedido>
                <TituloProblema>
                    {post.problema}
                </TituloProblema>
                <DescricaoProblema>
                    {post.descricao}
                </DescricaoProblema>
            </ContainerGeralPedido>
            <ContainerGeralPedido style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
            }}>
                <DetalhesButton onClick={()=>{redirectDetalhes(post.id)}}>
                    Detalhes
                </DetalhesButton>
            </ContainerGeralPedido>
        </ContainerIntroductionServices>
    )
}

const ListServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const loadingServices = async() => {
            try {
                const response = await (await getClientLogedServices()).data;

                await setServices(response);
            } catch (error) {
                if(error.response){
                    window.alert(error.response.data.erro);
                }
            }
        }

        loadingServices();
    }, []);

    return (
        services.map((post) => (<CardServices post={post}/>))
    );
}

const HomeServices = () => {

    return (
        <container>
            <Header tela="Home"/>
            <container style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <ContainerConteudoPage>
                
                    <container>
                        <ListServices/>
                    </container>

                </ContainerConteudoPage>
            </container>
        </container>
    );
}

export default HomeServices;