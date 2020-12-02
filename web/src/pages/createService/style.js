import styled from "styled-components";

export const FormularioServico = styled.form`
    width: 100%;
    min-height: 10px;
    height: auto;
    background-color: var(--color-white);
    padding: 20px 15px;
    border-radius: 20px;
    box-shadow: 0px 0px 5px black;
    border: 2px solid var(--color-gray);
`;

export const CampoTextFormulario = styled.input`
    width: 100%;
    height: 30px;
    background-color: var(--color-white);
    border: 2px solid var(--color-gray);
    border-radius: 10px;
    padding: 10px;
    font-size: 1.1em;
`;

export const TextCampo = styled.div`
    font-size: 1.5em;
    color: var(--color-sDark);
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 2px solid black;
    border-bottom-right-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 15px;
`;

export const CampoProblemaDescricao = styled.textarea`
    width: 100%;
    height: 350px;
    resize: none;
    border: 2px solid var(--color-gray);
    font-size: 1.1em;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 5px;
`;

export const ButtonEnviar = styled.input`
    width: 140px;
    height: 35px;
    display: block;
    margin: 0 auto;
    font-size: 1.1em;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
    background-color: var(--color-white);
    border-radius: 10px;
    padding: 5px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        background-color: var(--color-primary);
        color: var(--color-white);
    }
`;