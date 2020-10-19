import React, { useState } from "react";

import foto from "../../assets/menu.png";
import chamaTiLogo from "../../assets/chama.png";

import {ContainerLogo, LogoChamaTI, LogoImage, ContainerFormLogin, FormLogin, ContainerTexts, ContainerButtons, BotãoFormularioLogin, LinkCliqueMensagem, ContainerMensagemLink} from "./styles"
import { api } from "../../services/api";

const Login = () => {

    const [usuarioLogin, setUsuarioLogin] = useState({
        email: "",
        senha: ""
    });

    const handlerInput = (e) => {
        setUsuarioLogin({...usuarioLogin, [e.target.id]: e.target.value});

        console.log(usuarioLogin);
    }

    const entrar = (e) => {
        e.preventDefault();

        
    }

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
            <container style={{
                display: "block",
                paddingLeft: "200px",
                paddingRight: "200px",
            }}>
                <containerConteudoPage className="containerConteudoPage">

                    <ContainerLogo>
                        <LogoChamaTI id="logoChamaTIName">
                            ChamaTI
                            <LogoImage>
                                <img src={chamaTiLogo} alt="Logo ChamaTI" title="Logo ChamaTI"/>
                            </LogoImage>
                        </LogoChamaTI>
                    </ContainerLogo>
                        <ContainerFormLogin>
                            <FormLogin onSubmit={entrar}>
                                <ContainerTexts>
                                    <input type="email"
                                    placeholder="Login"
                                    required id="email"
                                    onChange={handlerInput}
                                    />
                                    <input type="password"
                                    placeholder="Senha"
                                    required id="senha"
                                    onChange={handlerInput}
                                    />
                                </ContainerTexts>
                                <ContainerButtons>
                                    <BotãoFormularioLogin type="submit">
                                        Login
                                    </BotãoFormularioLogin>
                                </ContainerButtons>
                            </FormLogin>
                        </ContainerFormLogin>
                        <ContainerMensagemLink>
                            Esqueceu sua senha?&nbsp; 
                            <LinkCliqueMensagem href="#">
                                Clique Aqui!
                            </LinkCliqueMensagem>
                        </ContainerMensagemLink>
                        <ContainerMensagemLink>
                            Ainda não possui sua conta?&nbsp;
                            <LinkCliqueMensagem href="#">
                                Clique Aqui!
                            </LinkCliqueMensagem>
                        </ContainerMensagemLink>
                </containerConteudoPage>
            </container>
        </container>
    )
}

export default Login;