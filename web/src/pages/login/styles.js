import styled from 'styled-components';

export const ContainerLogo = styled.div`
    width: 100%;
    min-height: 0px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    padding: 5px;
`;

export const LogoChamaTI = styled.div`
    width: 100%;
    height: inherit;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 2.6em;
    font-family: sans-serif;
    font-weight: bold;
    cursor: default;
    user-select: none;
    transition: 0.5s;
    
    &:hover{
        transition: 0.5s;
        color: var(--color-primary);
        text-shadow: 0px 0px 10px var(--color-light);
    }
`;

export const LogoImage = styled.figure`
    width: 25px;
    height: 100%;
`;

export const ContainerFormLogin = styled.div`
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
    margin-top: 60px;
`;

export const FormLogin = styled.form`
    width: 100%;
    height: inherit;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const ContainerTexts = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 5px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.1em;
    font-family: Arial, Helvetica, sans-serif;
`;

export const ContainerButtons = styled.div`
    width: 100%px;
    height: 100%;
    padding: 5px;
    display: block;
    margin: 0 auto;
`;

export const TextEntry = styled.div`
    width: inherit;
    height: inherit;
`;

export const TitleTextEntry = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1em;
    padding-left: 10px;
    opacity: 1;
`;

export const BotaoFormularioLogin = styled.button`
    width: 150px;
    min-height: 1px;
    height: auto;
    text-align: center;
    padding: 6px;
    border-radius: 38.5px;
    font-size: 1.1em;
    margin: 5px 0;
    background-color: var(--color-white);
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
    cursor: pointer;
    transition: 0.5s;

    :hover&{
        transition: 0.5s;
        background-color: var(--color-primary);
        color: white;
    }
`;

export const ContainerMensagemLink = styled.div`
    width: 100%;
    min-height: 10px;
    height: auto;
    text-align: center;
    padding: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1em;
    display: block;
`;

export const LinkCliqueMensagem = styled.button`
    font-family: inherit;
    font-size: inherit;
    text-decoration: none;
    color: var(--color-primary);
    background-color: transparent;
    border: none;
    cursor: pointer;

    :active&{
        color: var(--color-dark);
    }
`;

/* Container de Registro */
export const ContainerFormularioRegistro = styled.div`
    width: 1000px;
    height: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;