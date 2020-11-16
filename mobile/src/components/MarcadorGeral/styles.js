import styled from 'styled-components/native';

export const Header = styled.View`
    min-height: 60px; 
    height: auto;
    /* padding: 0 16px; */
    /* background: #000; */
    display: flex;
    flex-direction: row; 
    justify-content: flex-end;
    margin-top: 5px;
`;

export const TituloInicio = styled.Text`
    font-size: 23px;
    color: red;
    margin-top: 10px;
    font-style: italic;


`;

export const Marcador = styled.View`
    width: 10px;
    height: 50px;
    background: #000;
    justify-content: space-between;
    margin-left: 7px;
    margin-right: 3px;

`;