import styled from 'styled-components/native';

export const BotoesPrincipal = styled.View`
    height: 50px;
    /* background: red; */
    display: flex;
    flex-direction: row;
`;
export const BotaoAnterior = styled.TouchableOpacity`
    width: 200px;
    /* background: red; */
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    border-bottom-color: #F87700;
`;
export const BotaoAndamento = styled.TouchableOpacity`
     width: 200px;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    border-bottom-color: #F87700;
`;

export const Date = styled.Text`
    font-size: 19px;
    font-weight: bold;
    padding: 25px 20px 7px;

`;

export const TipoServico = styled.View`
    width: 200px;
    /* height: 10px; */
    background: yellow;
    margin-left: 5px;
`;







