import React, { useState } from "react";

import foto from "../../assets/menu.png";
import chamaTiLogo from "../../assets/chama.png";

import {ContainerLogo, LogoChamaTI, LogoImage, ContainerFormLogin, FormLogin, ContainerTexts, ContainerButtons, BotaoFormularioLogin, LinkCliqueMensagem, ContainerMensagemLink, ContainerFormularioRegistro} from "./styles"
import { api } from "../../services/api";

import { buscarViaCep } from "../../services/viaCep";

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
        console.log(usuarioRegistro);
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

        const campoLogradouro = document.getElementById('logradouro');
        const campoBairro = document.getElementById('bairro');
        const campoLocalidade = document.getElementById('localidade');
        const campoEstado = document.getElementById('uf');
        const campoNumero = document.getElementById('numero');

        const responseCep = async (e) => {
            const cep = await (e.target.value);
            const response = await(await buscarViaCep(cep)).data;

            await prencherCampos(response);
        }

        const prencherCampos = (dados) => {
            campoLogradouro.value = dados.logradouro;
            campoBairro.value = dados.bairro;
            campoLocalidade.value = dados.localidade;
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
                            <input type="text" required placeholder="Nome:" id="nome" value={usuarioRegistro.nome} onChange={handlerInput}/>
                            <input type="text" required placeholder="Email:" id="email" value={usuarioRegistro.email} onChange={handlerInput}/>
                            <input type="text" required placeholder="Senha:" id="senha" value={usuarioRegistro.senha} onChange={handlerInput}/>
                            <input type="text" required placeholder="Data de Nascimento:" id="data_nascimento" value={usuarioRegistro.data_nascimento} onChange={handlerInput}/>
                            <input type="text" required placeholder="RG:" id="rg" value={usuarioRegistro.rg} onChange={handlerInput}/>
                            <input type="text" required placeholder="CPF:" id="cpf" value={usuarioRegistro.cpf} onChange={handlerInput}/>
                            <input type="text" required placeholder="Telefone:" id="telefone" value={usuarioRegistro.telefone} onChange={handlerInput}/>
                            Sexo:
                            <select required onChange={handlerInput} id="sexo_id">
                                <option value="1">Masculino</option>
                                <option value="2">Feminino</option>
                            </select>
                        </ContainerTexts>
                        <ContainerTexts>
                            <input type="text" required placeholder="cep:" id="cep" onBlur={responseCep}/>
                            <input type="text" required placeholder="logradouro:" id="logradouro" value={usuarioRegistro.logradouro} onChange={handlerInput}/>
                            <input type="text" required placeholder="bairro:" id="bairro" value={usuarioRegistro.bairro} onChange={handlerInput}/>
                            <input type="text" required placeholder="cidade:" id="localidade" value={usuarioRegistro.cidade} onChange={handlerInput}/>
                            <input type="text" required placeholder="estado:" id="uf" value={usuarioRegistro.estado} onChange={handlerInput}/>
                            <input type="text" required placeholder="numero:" id="numero" value={usuarioRegistro.numero} onChange={handlerInput}/>
                            <input type="text" required placeholder="complemento:" id="complemento" value={usuarioRegistro.complemento} onChange={handlerInput}/>
                        </ContainerTexts>
                    </ContainerFormularioRegistro>
                    <ContainerButtons style={{
                        display: "flex",
                        flexDirection: "row",
                    }}>
                        <BotaoFormularioLogin type="button" style={{marginRight: "10px"}} onClick={() => {props.mostrarForm("login")}}>
                            Voltar
                        </BotaoFormularioLogin>
                        <BotaoFormularioLogin type="button">
                            Proximo
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