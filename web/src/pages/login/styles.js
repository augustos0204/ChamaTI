import styled from 'styled-components';

export const ContainerLogo = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    margin-bottom: 30px;
`;

export const LogoChamaTI = styled.div`
    width: 100%;
    height: 200px;
    display: block;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 3.0em;
    font-family: Arial, Helvetica, sans-serif;
`;

export const LogoImage = styled.figure`
    width: 45px;
    height: 60px;
    margin-bottom: 28px;
`;

export const ContainerFormLogin = styled.div`
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
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
    align-items: flex-end;
    justify-content: center;
    padding: 5px;
`;

export const ContainerButtons = styled.form`
    width: 30%;
    height: 100%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export const BotãoFormularioLogin = styled.div`
    width: 100%;
    min-height: 1px;
    height: auto;
    text-align: center;
    padding: 6px;
    border-radius: 38.5px;
    font-size: 1.1em;
    margin: 5px 0;
    background-color: #fff;
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
    cursor: pointer;
    transition: 0.5s;

    :hover&{
        transition: 0.5s;
        background-color: var(--color-primary);
        color: #fff;
    }
`;

export const ContainerTextoEsqueceuASenha = styled.div`
    width: 300px;
    min-height: 10px;
    height: auto;
    text-align: center;
    margin: 0 auto;
    bottom: 0;
    padding: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1em;
`;

export const LinkCliqueRecuperarSenha = styled.a`
    font-family: inherit;
    font-size: inherit;
    text-decoration: none;
    color: var(--color-primary);
`;
