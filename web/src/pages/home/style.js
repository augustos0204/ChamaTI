import styled from 'styled-components';

export const ContainerIntroductionServices = styled.div`
    width: 100%;
    min-height: 180px;
    height: auto;
    border-radius: 10px;
    background-color: var(--color-white);
    box-shadow: 0px 0px 10px black;
    padding-left: 30px;
    padding-right: 30px;
    transition: 0.5s;
    border: 2px solid var(--color-gray);
    margin-bottom: 20px;
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
    height: auto;
    border-bottom: 2px solid black;
    padding-bottom: 10px;
    margin-bottom: 10px;
`;

export const TituloProblema = styled.a`
    font-size: 1.1em;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 10px;
    font-weight: bold;
`;

export const DescricaoProblema = styled.p`
    font-size: 1.0em;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 10px;
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