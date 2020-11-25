import React from "react";

import foto from "../../assets/menu.png";
import perfilPadrao from "../../assets/perfilPadrão.jpg";
import {signOut, getCliente} from "../../services/security";

import { searchUser } from "../../services/api";

import {
    ContainerMenu,
    ContainerMenuImage,
    ContainerMenuItens,
    ContainerPerfil,
    FigurePerfil,
    ImagemPerfil,
    FigureCaption,
    NomePerfil,
    LogoutButton,
    MenuItem,
    SubMenuItem,
    ContainerSubmenu
} from "./styles";

const Header = ( props ) => {
    const idCliente = (getCliente().id);
    const logedUser = async (element) => {
        const response = await (await searchUser(idCliente)).data;
        const nomePerfil = await document.getElementById("userLogedName");
        nomePerfil.innerHTML = await response.nome;
        if(response.foto != null){
            const ImagemPerfil = await document.getElementById("userLogadImage");
            ImagemPerfil.src = response.foto;
        }
        else{
            ImagemPerfil.src = perfilPadrao;
        }
        
    }

    const redirectRoute = (rota) => {
        document.location.href = `http://localhost:3000/${rota}`;
    }

    logedUser(document.getElementById('userLogedName'));

    const confirmaLogout = () => {
        if (window.confirm('Tem certeza que deseja deslogar?')){
            signOut();
            document.location.reload();
        }
    }

    return (
        <header style={{
            position: "fixed",
        }}>
            <container
            className="container">

                <containerMenuPage
                className="containerMenuPage">

                    <ContainerMenu>
                        <ContainerMenuImage src={foto} alt="Menu-Icon" title="Menu-Icon"/>
                        <ContainerMenuItens>
                            <ContainerPerfil>
                                <FigurePerfil>
                                    <FigureCaption>
                                        Ver Perfil
                                    </FigureCaption>
                                    <ImagemPerfil src={perfilPadrao} id="userLogadImage" alt="Imagem-Perfil" title="imagem-perfil"/>
                                </FigurePerfil>
                                <NomePerfil id="userLogedName">
                                    Nome Sobrenome
                                </NomePerfil>
                                <LogoutButton onClick={confirmaLogout}>
                                    Logout
                                </LogoutButton>
                            </ContainerPerfil>
                            <MenuItem onClick={() => {redirectRoute("home")}}>
                                Home
                            </MenuItem>
                            <MenuItem onClick={() => {redirectRoute("services/create")}}>
                                Criar Postagem
                            </MenuItem>
                            <SubMenuItem>
                                SubMenu
                                <ContainerSubmenu>
                                    <MenuItem>
                                        Um
                                    </MenuItem>
                                    <MenuItem>
                                        Dois
                                    </MenuItem>
                                </ContainerSubmenu>
                            </SubMenuItem>
                        </ContainerMenuItens>
                    </ContainerMenu>
                    <containerPageName
                    className="containerPageName">

                        {props.tela}
                        <pageNameBarra
                        className="pageNameBarra">
                        </pageNameBarra>

                    </containerPageName>

                </containerMenuPage>
            </container>
        </header>
    );
}

export default Header;