import styled from 'styled-components';

export const ContainerLogoImage = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    margin-bottom: 30px;
`;

export const LogoImage = styled.figure`
    width: 130px;
    height: 200px;
    display: block;
`;

export const ContainerFormLogin = styled.div`
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const FormLogin = styled.form`
    width: 500px;
    height: inherit;
    display: flex;
    flex-direction: row;
`;

export const ContainerTexts = styled.form`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
`;

export const ContainerButtons = styled.form`
    width: 30%;
    height: 100%;
    background-color: crimson;
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
