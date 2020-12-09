import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
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
    const History = useHistory();
    let fotoPerfil = perfilPadrao;
    const [userSigned, setUserSigned] = useState({
        SexoClienteId: null,
        cpf: "000.000.000-00",
        createdAt: "0000-00-00 00:00",
        data_nascimento: "0000-00-00",
        email: "undefined",
        foto: null,
        id: null,
        nome: "undefined",
        sexo_cliente_id: null,
        telefone: "+00(00)00000-0000",
        updatedAt: "0000-00-00 00:00"
    });

    const loadingUserData = async() => {
        const response = await searchUser(getCliente().id);
        setUserSigned(response.data);
    }

    useEffect(() => {
        loadingUserData();
    }, []);

    const redirectRoute = (rota) => {
        return History.push(`/${rota}`);
    }

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
                                    <ImagemPerfil src={fotoPerfil} id="userLogadImage" alt="Imagem-Perfil" title="imagem-perfil"/>
                                </FigurePerfil>
                                <NomePerfil>
                                    {userSigned.nome}
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