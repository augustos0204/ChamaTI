import React, { useState, useEffect } from "react";

// import chamaTiLogo from "../../assets/chama.png";

import {
    ContainerLogo, 
    LogoChamaTI,  
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

import { 
    api,
    getAllSexoUser
} from "../../services/api";

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
                <LogoChamaTI id="logoChamaTIName" className="logoFont">
                    ChamaTI
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

const SelectSexo = ( {post} ) => {
    return (
        <option selected value="1">Masculino</option>
    )
}

const ContentFormRegistro = (props) => {
    const [usuarioRegistro, setUsuarioRegistro] = useState({
        nome: "",
        email: "",
        senha: "",
        data_nascimento: "",
        cpf: "",
        telefone: "",
        sexo_id: "",
        cep: "",
        logradouro: "",
        bairro: "",
        cidade: "",
        estado: "",
        numero: "",
        complemento: ""
    });

    const [sexoData, setSexoData] = useState([]);


    useEffect(() => {
        const getSexos = async () => {
            try {
                const response = await getAllSexoUser();

                await setSexoData(response);
            } catch (error) {
                if(error.response){
                    window.alert(error.response.data.erro);
                }
            }
            
        }

        getSexos();
    }, []);

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


        const getterSexo = (e) => {
            const elementValue = e.target.value;
            usuarioRegistro.sexo_id = elementValue;
            console.log(usuarioRegistro);
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

        return (
            <container>
                <ContainerLogo>
                    <LogoChamaTI id="logoChamaTIName" className="logoFont">
                        ChamaTI
                    </LogoChamaTI>
                </ContainerLogo>
                <FormLogin onSubmit={registrar}>
                    <ContainerFormularioRegistro>
                        <ContainerTexts>
                            <input type="text" required placeholder="Nome:" id="nome" value={usuarioRegistro.nome} onChange={handlerInput}/>
                            <input type="email" required placeholder="Email:" id="email" value={usuarioRegistro.email} onChange={handlerInput}/>
                            <input type="password" required placeholder="Senha:" id="senha" value={usuarioRegistro.senha} onChange={handlerInput}/>
                            <input type="text" required placeholder="Data de Nascimento:" id="data_nascimento" value={usuarioRegistro.data_nascimento} onChange={handlerInput}/>
                            <input type="text" required placeholder="CPF:" id="cpf" value={usuarioRegistro.cpf} onChange={handlerInput}/>
                            <input type="text" required placeholder="Telefone:" id="telefone" value={usuarioRegistro.telefone} onChange={handlerInput}/>
                            <span style={{marginLeft: "10px"}}>Sexo:</span>
                            <select required onChange={getterSexo} id="sexo_id" style={{marginLeft: "10px"}}>
                                <option selected value="--">--</option>
                                <SelectSexo/>
                            </select>
                        </ContainerTexts>
                        <ContainerTexts>
                            <input type="text" required placeholder="cep:" id="cep" onBlur={responseCep}/>
                            <input type="text" required disabled placeholder="logradouro:" id="logradouro" value={usuarioRegistro.logradouro} onChange={handlerInput}/>
                            <input type="text" required disabled placeholder="bairro:" id="bairro" value={usuarioRegistro.bairro}/>
                            <input type="text" required disabled placeholder="cidade:" id="localidade" value={usuarioRegistro.cidade}/>
                            <input type="text" required disabled placeholder="estado:" id="uf" value={usuarioRegistro.estado}/>
                            <input type="number" required placeholder="numero:" id="numero" min="0" value={usuarioRegistro.numero} onChange={handlerInput}/>
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
            <container style={{
                display: "block",
                width: "1000px",
                minHeight: "100px",
                height: "auto",
                paddingTop: "70px",
                borderRadius: "20px",
                overflow: "hidden",
                border: "2px solid var(--color-gray)",
                backgroundColor: "var(--color-white)",
                boxShadow: "0px 0px 10px black",
                margin: "10vh auto",
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