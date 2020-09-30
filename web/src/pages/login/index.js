import React from "react";

import foto from "../../assets/menu.png";
import chamaTiLogo from "../../assets/chama.png";

import {ContainerLogoImage, LogoImage, ContainerFormLogin, FormLogin, ContainerTexts, ContainerButtons} from "./styles"

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

                <ContainerLogoImage>
                    <LogoImage>
                        <img src={chamaTiLogo} alt="Logo ChamaTI" title="Logo ChamaTI"/>
                    </LogoImage>
                </ContainerLogoImage>
                    <ContainerFormLogin>
                        <FormLogin>
                            <ContainerTexts>
                                    <input type="text" placeholder="Login"></input>
                                    <input type="text" placeholder="Senha"></input>
                            </ContainerTexts>
                            <ContainerButtons>

                            </ContainerButtons>
                        </FormLogin>
                    </ContainerFormLogin>
            </containerConteudoPage>
        </container>
    )
}

export default Login;