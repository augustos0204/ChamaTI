import React, { useState, useEffect } from "react";
import InputMask from 'react-input-mask';

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

import { 
    buscarViaCep,
    buscarPostmon
 } from "../../services/viaCep";

import { useHistory } from "react-router-dom";
import { signIn } from "../../services/security";

import {SpinnerLoading} from "../../components/loading/loadingEffects";

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
                        className="textLogin"
                        value={usuarioLogin.email}
                        onChange={handlerInput}
                        />
                        <input type="password"
                        placeholder="Senha"
                        required id="senha"
                        className="textLogin"
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
    const dataCep = {
        bairro: "",
        cep: "",
        cidade: "",
        rua: "",
        estado: ""
    };
    
    const [usuarioRegistro, setUsuarioRegistro] = useState({
        nome: "",
        email: "",
        senha: "",
        data_nascimento: "",
        data_nascimento_br: "",
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

    const SelectSexo = ( {post} ) => {
        return (
        <option selected value={post.id}>{post.sexo}</option>
        )
    }

    const [sexoData, setSexoData] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(true);


    useEffect(() => {
        const getSexos = async () => {
            try {
                const response = await getAllSexoUser();
                await setSexoData(response);
                setLoadingStatus(false);
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
    
    const validaDataNascimento = () => {
        const valuesData = usuarioRegistro.data_nascimento_br.split('/');
        const dataPadraoAmericano = `${valuesData[2]}-${valuesData[1]}-${valuesData[0]}`;
        usuarioRegistro.data_nascimento = dataPadraoAmericano;
    }

    const registrar = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/cliente", usuarioRegistro);

            if(response.status === 201){
                window.alert("Registrado com Sucesso!");
                document.location.reload();
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

        const ResponseCep = async (e) => {

            const cep = await (e.target.value);

            try {

                const response = await (await buscarViaCep(cep)).data;
                console.log("viacep!!!")
                await prencherCampos(response, "viacep");

            } catch (error) {
                try {
                    const response = await (await buscarPostmon(cep)).data;
                    console.log("VIA: Postmon!!! \n ERROR VIACEP: " + error);
                    await prencherCampos(response, "postmon");
                } catch (error2) {
                    window.alert('Não foi possível localizar seu CEP, por favor, digite manualmente:');
                    console.log(`VIACEP ERROR: ${error} \n POSTMON ERROR: ${error2}`);
                } 
            }
        }

        const prencherCampos = (dados, from) => {

            if (from === "viacep"){
                dataCep.bairro = dados.bairro;
                dataCep.cep = dados.cep;
                dataCep.cidade = dados.localidade;
                dataCep.estado = dados.uf;
                dataCep.rua = dados.logradouro;

            } else if (from === "postmon"){
                dataCep.bairro = dados.bairro;
                dataCep.cep = dados.cep;
                dataCep.cidade = dados.cidade;
                dataCep.estado = dados.estado_info.nome;
                dataCep.rua = dados.logradouro;
            }

            const campoLogradouro = document.getElementById('logradouro');
            const campoBairro = document.getElementById('bairro');
            const campoLocalidade = document.getElementById('localidade');
            const campoEstado = document.getElementById('uf');
            const campoCep = document.getElementById('cep');

            campoLogradouro.value = dataCep.rua;
            campoBairro.value = dataCep.bairro;
            campoLocalidade.value = dataCep.cidade;
            campoEstado.value = dataCep.estado;
            campoCep.value = dataCep.cep;

            usuarioRegistro.logradouro = dataCep.rua;
            usuarioRegistro.bairro = dataCep.bairro;
            usuarioRegistro.cidade = dataCep.cidade;
            usuarioRegistro.estado = dataCep.estado;
            usuarioRegistro.cep = dataCep.cep;
        }

        const getterSexo = (e) => {
            const elementValue = e.target.value;
            usuarioRegistro.sexo_id = elementValue;
            console.log(usuarioRegistro);
        }

        return (

            loadingStatus===true ? <SpinnerLoading/> : 

            <container>
                <ContainerLogo>
                    <LogoChamaTI id="logoChamaTIName" className="logoFont">
                        ChamaTI
                    </LogoChamaTI>
                </ContainerLogo>
                <FormLogin onSubmit={registrar}>
                    <ContainerFormularioRegistro>
                        <ContainerTexts>
                            <input className="textLogin" type="text" required placeholder="Nome:" id="nome" value={usuarioRegistro.nome} onChange={handlerInput}/>
                            <input className="textLogin" type="email" required placeholder="Email:" id="email" value={usuarioRegistro.email} onChange={handlerInput}/>
                            <input className="textLogin" type="password" required placeholder="Senha:" id="senha" value={usuarioRegistro.senha} onChange={handlerInput}/>
                            <InputMask mask="99/99/9999" className="textLogin" type="text" required placeholder="Data de Nascimento:" id="data_nascimento_br" value={usuarioRegistro.data_nascimento_br} onChange={handlerInput} onBlur={validaDataNascimento}/>
                            <InputMask mask="999.999.999-99" className="textLogin" type="text" required placeholder="CPF:" id="cpf" value={usuarioRegistro.cpf} onChange={handlerInput}/>
                            <InputMask mask="+99(99)99999-9999" className="textLogin" type="text" required placeholder="Telefone:" id="telefone" value={usuarioRegistro.telefone} onChange={handlerInput}/>
                            <span style={{marginLeft: "10px"}}>Sexo:</span>
                            <select required onChange={getterSexo} id="sexo_id" style={{marginLeft: "10px"}}>
                                {sexoData.map((post) => (<SelectSexo post={post}/>))}
                            </select>
                        </ContainerTexts>
                        <ContainerTexts>
                            <InputMask mask="99999-999" className="textLogin" type="text" required placeholder="Cep:" id="cep" onBlur={ResponseCep}/>
                            <input className="textLogin" type="text" required disabled placeholder="Logradouro:" id="logradouro" value={usuarioRegistro.logradouro} onChange={handlerInput}/>
                            <input className="textLogin" type="text" required disabled placeholder="Bairro:" id="bairro" value={usuarioRegistro.bairro}/>
                            <input className="textLogin" type="text" required disabled placeholder="Cidade:" id="localidade" value={usuarioRegistro.cidade}/>
                            <input className="textLogin" type="text" required disabled placeholder="Estado:" id="uf" value={usuarioRegistro.estado}/>
                            <input className="numberLogin" type="number" required placeholder="Numero:" id="numero" min="0" value={usuarioRegistro.numero} onChange={handlerInput}/>
                            <input className="textLogin" type="text" required placeholder="Complemento:" id="complemento" value={usuarioRegistro.complemento} onChange={handlerInput}/>
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