import React from "react";

import Header from "../../components/menu/header";

import {ContainerIntroductionServices, DetalhesButton, ContainerInfoPessoa, ContainerGeralPedido, DescricaoProblema, TituloProblema, ImagePessoaIcon, TextoInformativoPessoa, TextoInformativoStatus} from "./style";
import chamaTiLogo from "../../assets/chama.png";
// import { api } from "../../services/api";

const HomeServices = () => {
    return (
        <container>
            <Header/>
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
                    <ContainerIntroductionServices>
                        <ContainerInfoPessoa>
                            <ImagePessoaIcon>
                                <img src={chamaTiLogo} alt="foto do perfil" title="foto do perfil"/>
                            </ImagePessoaIcon>
                            <TextoInformativoPessoa>
                                Loja de Software - São Paulo
                            </TextoInformativoPessoa>
                            <TextoInformativoStatus>
                                Pedido em Andamento

                                <separador style={{
                                    width: "10px",
                                    height: "10px",
                                    backgroundColor: "orange",
                                    display: "block",
                                    marginLeft: "10px",
                                    marginRight: "10px",
                                    borderRadius: "100%",
                                }} />

                                0000    
                            </TextoInformativoStatus>
                        </ContainerInfoPessoa>
                        <ContainerGeralPedido>
                            <TituloProblema>
                                Titulo do Problema
                            </TituloProblema>
                            <DescricaoProblema>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
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
                </containerConteudoPage>
            </container>
        </container>
    );
}

export default HomeServices;