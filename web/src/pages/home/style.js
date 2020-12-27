import styled from 'styled-components';

export const ContainerConteudoPage = styled.div `
    width: 1200px;
    height: 85%;
    display: block;
    line-height: 1.5;
    letter-spacing: 0.5px;
    position: absolute;
    margin-top: 70px;
    z-index: 1;
    overflow: auto;
`;

export const ContainerIntroductionServices = styled.div`
    width: 1000px;
    min-height: 180px;
    height: auto;
    border-radius: 10px;
    background-color: var(--color-white);
    box-shadow: 0px 0px 10px black;
    padding-left: 30px;
    padding-right: 30px;
    transition: 0.5s;
    border: 2px solid var(--color-gray);
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
`;

export const ContainerInfoPessoa = styled.div`
    width: 100%;
    height: 60px;
    border-bottom: 2px solid black;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-bottom: 10px;
`;

export const ImagePessoaIcon = styled.figure`
    width: 45px;
    height: 45px;
    border-radius: 100%;
    float: left;
    margin-right: 10px;
    overflow: hidden;
    background-color: white;
`;

export const TextoInformativoPessoa = styled.div`
    font-size: 1.1em;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
`;

export const TextoInformativoStatus = styled.div`
    font-size: 1.0em;
    color: gray;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    align-items: center;
`;

export const ContainerGeralPedido = styled.div`
    width: 100%;
    min-height: 10px;
    max-height: 80px;
    height: auto;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 2px solid black;
`;

export const TituloProblema = styled.a`
    width: 100%;
    height: 1ch;
    font-size: 1.1em;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 10px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const DescricaoProblema = styled.p`
    width: 100%;
    height: 5ch;
    font-size: 1.0em;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const DetalhesButton = styled.button`
    width: 200px;
    height: 30px;
    background-color: transparent;
    border: 2px solid var(--color-primary);
    transition: 0.5s;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1em;
    color: var(--color-primary);
    cursor: pointer;
    border-radius: 20px;

    &:hover{
        color: var(--color-white);
        background-color: var(--color-primary);
    }
`;

export const ContainerDetalhes = styled.div`
    width: 100px;
    height: 100px;
    background-color: red;
`;