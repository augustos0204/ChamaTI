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

import {SpinnerLoading} from "../../components/loading/loadingEffects";

const SearchAutorCard = (id) => {
    const [autor, setAutor] = useState([]);
    const user = async () => {
        const response = await searchUser(id);
        setAutor(response.data);
    }
    
    useEffect(() => {
        user();
    }, []);

    return autor.nome;
}

const CardServices = ({ post }) => {
    const History = useHistory();

    const redirectDetalhes = (service) => {
        return History.push(`/services/detalhes?serviceId=${service}`);
    }

    return (
        <ContainerIntroductionServices>
            <ContainerInfoPessoa>
                <ImagePessoaIcon>
                    <img src={perfilPadrao} alt="foto do perfil" title="foto do perfil"/>
                </ImagePessoaIcon>
                <TextoInformativoPessoa>
                    {SearchAutorCard(post.ClienteId)}
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
    const [loadingStatus, setLoadingStatus] = useState(true);

    useEffect(() => {
        const loadingServices = async() => {
            try {
                const response = (await getClientLogedServices()).data;
                setServices(response);
                setLoadingStatus(false);
            } catch (error) {
                if(error.response){
                    window.alert(error.response.data.erro);
                }
            }
        }

        loadingServices();
    }, []);

    return (
        loadingStatus===true?<SpinnerLoading/>:services.map((post) => (<CardServices post={post}/>))
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