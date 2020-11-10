import React, { useState } from "react";

import chamaTiLogo from "../../assets/chama.png";

import Header from "../../components/menu/header";

import {
    ContainerLogo, 
    LogoChamaTI, 
    LogoImage, 
    ContainerFormLogin, 
    FormLogin, 
    ContainerTexts, 
    ContainerButtons, 
    BotaoFormularioLogin, 
    LinkCliqueMensagem, 
    ContainerMensagemLink, 
    ContainerFormularioRegistro
} 
from "./styles";

import { api } from "../../services/api";

import { buscarViaCep } from "../../services/viaCep";

import { useHistory } from "react-router-dom";
import { signIn } from "../../services/security";

const ContentFormLogin = (props) => {
    const history = useHistory();

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
                
                signIn(response.data);

                return history.push("/home");
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
        const validaCep = (element) => {
            return true;
        }

        const responseCep = async (e) => {
            if (validaCep(e)){
                try {
                    const cep = await (e.target.value);
                    const response = await(await buscarViaCep(cep)).data;
                    await console.log(response);
    
                    await prencherCampos(response);
    
                } catch (error) {
                    window.alert('Não foi possível localizar seu CEP, por favor, digite manualmente:');
                }
            }
        }

        const prencherCampos = (dados) => {

            const campoLogradouro = document.getElementById('logradouro');
            const campoBairro = document.getElementById('bairro');
            const campoLocalidade = document.getElementById('localidade');
            const campoEstado = document.getElementById('uf');
            const campoCep = document.getElementById('cep');

            campoLogradouro.value = dados.logradouro;
            campoBairro.value = dados.bairro;
            campoLocalidade.value = dados.localidade;
            campoEstado.value = dados.uf;
            campoCep.value = dados.cep;

            usuarioRegistro.logradouro = dados.logradouro;
            usuarioRegistro.bairro = dados.bairro;
            usuarioRegistro.cidade = dados.localidade;
            usuarioRegistro.estado = dados.uf;
            usuarioRegistro.cep = dados.cep;
        }

        const selectSexoValue = (e) => {
            console.log("ae");
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
                            <input type="email" required placeholder="Email:" id="email" value={usuarioRegistro.email} onChange={handlerInput}/>
                            <input type="password" required placeholder="Senha:" id="senha" value={usuarioRegistro.senha} onChange={handlerInput}/>
                            <input type="text" required placeholder="Data de Nascimento:" id="data_nascimento" value={usuarioRegistro.data_nascimento} onChange={handlerInput}/>
                            <input type="text" required placeholder="RG:" id="rg" value={usuarioRegistro.rg} onChange={handlerInput}/>
                            <input type="text" required placeholder="CPF:" id="cpf" value={usuarioRegistro.cpf} onChange={handlerInput}/>
                            <input type="text" required placeholder="Telefone:" id="telefone" value={usuarioRegistro.telefone} onChange={handlerInput}/>
                            Sexo:
                            <select required onChange={selectSexoValue} id="sexo_id">
                                <option value="1">Masculino</option>
                                <option value="2">Feminino</option>
                            </select>
                        </ContainerTexts>
                        <ContainerTexts>
                            <input type="text" required placeholder="cep:" id="cep" onBlur={responseCep}/>
                            <input type="text" required disabled placeholder="logradouro:" id="logradouro" value={usuarioRegistro.logradouro} onChange={handlerInput}/>
                            <input type="text" required disabled placeholder="bairro:" id="bairro" value={usuarioRegistro.bairro}/>
                            <input type="text" required disabled placeholder="cidade:" id="localidade" value={usuarioRegistro.cidade}/>
                            <input type="text" required disabled placeholder="estado:" id="uf" value={usuarioRegistro.estado}/>
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