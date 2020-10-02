import React from "react";

import foto from "../../assets/menu.png";
import chamaTiLogo from "../../assets/chama.png";

import {ContainerLogo, LogoChamaTI, LogoImage, LinkCliqueRecuperarSenha, ContainerFormLogin, FormLogin, ContainerTexts, ContainerButtons, ContainerTextoEsqueceuASenha, BotãoFormularioLogin} from "./styles"

const Login = () => {
    return (
        <container>
            <header>
                <container
                className="container">

                    <containerMenuPage
                    className="containerMenuPage">
                        
                        <containerMenu
                        className="containerMenu">
                            <img src={foto} alt="Ícone Menu" title="Ícone Menu"/>
                        </containerMenu>
                        <containerPageName
                        className="containerPageName">

                            Login
                            <pageNameBarra
                            className="pageNameBarra">
                            </pageNameBarra>

                        </containerPageName>

                    </containerMenuPage>
                </container>
            </header>
            <containerConteudoPage className="containerConteudoPage">

                <ContainerLogo>
                    <LogoChamaTI>
                        ChamaTI
                        <LogoImage>
                            <img src={chamaTiLogo} alt="Logo ChamaTI" title="Logo ChamaTI"/>
                        </LogoImage>
                    </LogoChamaTI>
                </ContainerLogo>
                    <ContainerFormLogin>
                        <FormLogin>
                            <ContainerTexts>
                                <input type="text" placeholder="Login"></input>
                                <input type="text" placeholder="Senha"></input>
                            </ContainerTexts>
                            <ContainerButtons>
                                <BotãoFormularioLogin>
                                    Login
                                </BotãoFormularioLogin>
                                <BotãoFormularioLogin>
                                    Criar Conta
                                </BotãoFormularioLogin>
                            </ContainerButtons>
                        </FormLogin>
                    </ContainerFormLogin>
                    <ContainerTextoEsqueceuASenha>
                        Esqueceu sua senha? 
                        <LinkCliqueRecuperarSenha href="#">
                            Clique Aqui!
                        </LinkCliqueRecuperarSenha>
                    </ContainerTextoEsqueceuASenha>
            </containerConteudoPage>
        </container>
    )
}

export default Login;