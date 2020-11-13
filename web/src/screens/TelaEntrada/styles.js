import styled from 'styled-components';

export const InfoLoja = styled.View`
    height: 200px;
    /* background: red; */
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
`;


export const LogoLoja = styled.Image`
    width: 100px;
    height: 100px;
`;


export const NomeLoja = styled.Text`
    font-weight: bold;
    font-size: 40px;
`;

export const ContainerBotao = styled.View`
    min-height: 100px;
    height: auto;
    background: red;
    /* margin-top: 80px; */
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
`;

export const BotaoEntrar = styled.TouchableOpacity` 
    width: 200px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    background: #F87700;
`;


export const BotaoCadastrar = styled.TouchableOpacity`
    width: 200px;
    height: 50px;
    align-items: center;
    justify-content: center;
    background: #F87700;
    border-radius: 15px;
    margin-top: 20px;
`;


export const Footer = styled.View`
    /* margin-top: 160px; */
    align-items: center;
`;

export const ContainerInput = styled.View`
    height: 200px;
    background: black;
`;






