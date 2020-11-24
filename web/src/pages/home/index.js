import React, { useEffect, useState } from "react";

import Header from "../../components/menu/header";

import perfilPadrao from "../../assets/perfilPadrão.jpg";

import { getAllServices, searchUser } from "../../services/api";

import {
    ContainerIntroductionServices,
    DetalhesButton, ContainerInfoPessoa,
    ContainerGeralPedido, DescricaoProblema,
    TituloProblema,
    ImagePessoaIcon,
    TextoInformativoPessoa,
    TextoInformativoStatus
} from "./style";

// import chamaTiLogo from "../../assets/chama.png";

const CardServices = ({ post }) => {
    const [autor, setAutor] = useState([]);
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

    // let image = perfilPadrao;

    // if (autor.foto != null){
    //     image = autor.foto;
    // }

    getAutorData();

    return (
        <ContainerIntroductionServices>
            <ContainerInfoPessoa>
                <ImagePessoaIcon>
                    <img src={post.foto} alt="foto do perfil" title="foto do perfil"/>
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
                <DetalhesButton>
                    Detalhes
                </DetalhesButton>
            </ContainerGeralPedido>
        </ContainerIntroductionServices>
    )
}

const HomeServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const loadingServices = async() => {
            try {
                const response = await (await getAllServices()).data;

                await setServices(response);
            } catch (error) {
                if(error.response){
                    console.log(error.response.data.erro);
                }
            }
        }

        loadingServices();
    }, []);

    return (
        <container>
            <Header tela="Home"/>
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
                    {services.map((post) => (<CardServices post={post}/>))}
                </containerConteudoPage>
            </container>
        </container>
    );
}

export default HomeServices;