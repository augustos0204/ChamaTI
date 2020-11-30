import { View } from 'react-native';
import styled from 'styled-components/native';

export const ContainerPrincipal = styled.View`
    width: 90%;
    min-height: 200px;
    height: auto;
    /* background: red; */
    align-self: center;
    margin-top: 10px;
    margin-bottom: 30px;
    border-radius: 10px;
    border: 1px solid black;
    

`;

export const Header = styled.View`
    flex-direction: row;
    padding: 10px 10px;
    border: 1px solid transparent;
    border-bottom-color: #000;
`;


export const Body = styled.View`
    min-height: 30px;
    height: auto;
    padding: 10px 10px;
    border: 1px solid transparent;
    border-bottom-color: #000;
`;


export const Footer = styled.View`
    height: 50px;
    background-color: red;
    padding: 5px 5px;
`;

export const NameLoja = styled.Text`
    font-size: 18px;
    color: #000;
    font-weight: bold;
`;


export const LocalLoja = styled.Text`
`;

export const StatusPedido = styled.Text`

`;

export const NumPedido = styled.Text``;

export const Num = styled.Text`
    /* padding: 5px 5px; */
    width: 20px;
    height: 20px;
    border: 1px solid black;
    text-align: center;
    border-radius: 10px;
    
`;


export const Numservico = styled.View`
    flex-direction: row;
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* border-radius: 10px; */
    /* background-color: blue; */
    margin-bottom: 5px;

`;


export const Servico = styled.Text`
    
`;





