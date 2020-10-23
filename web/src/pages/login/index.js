import React, { useState } from "react";

import foto from "../../assets/menu.png";
import chamaTiLogo from "../../assets/chama.png";

import {ContainerLogo, LogoChamaTI, LogoImage, ContainerFormLogin, FormLogin, ContainerTexts, ContainerButtons, BotaoFormularioLogin, LinkCliqueMensagem, ContainerMensagemLink, ContainerFormularioRegistro} from "./styles"
import { api } from "../../services/api";

const ContentFormLogin = (props) => {
    const [usuarioLogin, setUsuarioLogin] = useState({
        email: "",
        senha: ""
    });

    const handlerInput = (e) => {
        setUsuarioLogin({...usuarioLogin, [e.target.id]: e.target.value});

    }

    const entrar = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/sessao/cliente", usuarioLogin);

            if(response.status === 201){
                window.alert("Logado!");
            }

        } catch (error) {
            console.log(error);
            if(error.response){
                return window.alert(error.response.data.erro);
            }
            else{
                return window.alert("Ops, erro de conexão...");
            }
        }
    }

    return (
        <container>
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
                        value={usuarioLogin.email}
                        onChange={handlerInput}
                        />
                        <input type="password"
                        placeholder="Senha"
                        required id="senha"
                        value={usuarioLogin.senha}
                        onChange={handlerInput}
                        />
                    </ContainerTexts>
                    <ContainerButtons>
                        <BotaoFormularioLogin type="submit">
                            Login
                        </BotaoFormularioLogin>
                    </ContainerButtons>
                </FormLogin>
            </ContainerFormLogin>
            <ContainerMensagemLink>
                Esqueceu sua senha?&nbsp; 
                <LinkCliqueMensagem>
                    Clique Aqui!
                </LinkCliqueMensagem>
            </ContainerMensagemLink>
            <ContainerMensagemLink>
                Ainda não possui sua conta?&nbsp;
                <LinkCliqueMensagem onClick={() => {
                    props.mostrarForm("handlerInput")
                }}>
                    Clique Aqui!
                </LinkCliqueMensagem>
            </ContainerMensagemLink>
        </container>
    )
}

const ContentFormRegistro = (props) => {
    const [usuarioRegistro, setUsuarioRegistro] = useState({
        /*Dados Pessoais*/
        nome: "",
        email: "",
        senha: "",
        data_nascimento: "",
        rg: "",
        cpf: "",
        telefone: "",
        sexo_id: "",

        /*Localização*/
        cep: "",
        logradouro: "",
        bairro: "",
        cidade: "",
        estado: "",
        numero: "",
        complemento: ""
    });

    const handlerInput = (e) => {
        setUsuarioRegistro({...usuarioRegistro, [e.target.id]: e.target.value});

    }

    const registrar = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/cliente", usuarioRegistro);

            if(response.status === 201){
                window.alert("Registrado com Sucesso!");
            }

        } catch (error) {
            console.log(error);
            if(error.response){
                return window.alert(error.response.data.erro);
            }
            else{
                return window.alert("Ops, erro de conexão...");
            }
        }
    }

    return (
        <container>
            <ContainerLogo>
                <LogoChamaTI id="logoChamaTIName">
                    ChamaTI
                    <LogoImage>
                        <img src={chamaTiLogo} alt="Logo ChamaTI" title="Logo ChamaTI"/>
                    </LogoImage>
                </LogoChamaTI>
            </ContainerLogo>
                <FormLogin onSubmit={registrar}>
                    <ContainerFormularioRegistro>
                        <ContainerTexts style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <input type="text" value={usuarioRegistro.nome} onChange={{handlerInput}} required placeholder="Nome:"/>
                            <input type="text" required placeholder="Email:" onChange={{handlerInput}} value={usuarioRegistro.email}/>
                            <input type="text" required placeholder="Senha:" onChange={{handlerInput}} value={usuarioRegistro.senha}/>
                            <input type="text" required placeholder="Data de Nascimento:" onChange={{handlerInput}} value={usuarioRegistro.data_nascimento}/>
                            <input type="text" required placeholder="RG:" onChange={{handlerInput}} value={usuarioRegistro.rg}/>
                            <input type="text" required placeholder="CPF:" onChange={{handlerInput}} value={usuarioRegistro.cpf}/>
                            <input type="text" required placeholder="Telefone:" onChange={{handlerInput}} value={usuarioRegistro.telefone}/>
                            Sexo:
                            <select required>
                                <option value="masc">Masculino</option>
                                <option value="Feminino">Feminino</option>
                            </select>
                        </ContainerTexts>
                        <ContainerTexts>
                            <input type="text" required placeholder="Cep:" value={usuarioRegistro.cep}/>
                            <input type="text" required placeholder="Logradouro:" value={usuarioRegistro.logradouro}/>
                            <input type="text" required placeholder="Bairro:" value={usuarioRegistro.bairro}/>
                            <input type="text" required placeholder="Cidade:" value={usuarioRegistro.cidade}/>
                            <input type="text" required placeholder="Estado:" value={usuarioRegistro.estado}/>
                            <input type="text" required placeholder="Numero:" value={usuarioRegistro.numero}/>
                            <input type="text" required placeholder="Complemento:" value={usuarioRegistro.complemento}/>
                        </ContainerTexts>
                    </ContainerFormularioRegistro>
                    <ContainerButtons style={{
                        display: "flex",
                        flexDirection: "row",
                    }}>
                        <BotaoFormularioLogin type="button" style={{marginRight: "10px"}} onClick={() => {props.mostrarForm("login")}}>
                            Voltar
                        </BotaoFormularioLogin>
                        <BotaoFormularioLogin type="submit">
                            Registrar
                        </BotaoFormularioLogin>
                        
                    </ContainerButtons>
                </FormLogin>
        </container>
    )
}

const Login = () => {

    const [mostrarForm, setMostrarForm] = useState("login");

    return (
        <container>
            <header style={{
                position: "fixed",
            }}>
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
                width: "1000px",
                minHeight: "100px",
                height: "auto",
                margin: "0 auto",
                paddingTop: "70px",
            }}>
                <containerConteudoPage className="containerConteudoPage" style={{
                    paddingTop: "15px",
                    paddingBottom: "15px",
                }}>
                    <container>
                        {mostrarForm === "login" ?(<ContentFormLogin mostrarForm={setMostrarForm}/>
                        ) : (
                        <ContentFormRegistro mostrarForm={setMostrarForm}/>)}
                    </container>
                </containerConteudoPage>
            </container>
        </container>
    );
}

export default Login;