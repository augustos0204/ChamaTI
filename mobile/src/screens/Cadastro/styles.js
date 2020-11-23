import styled from 'styled-components';

export const ContainerFoto = styled.View`
    width: 200px;
    height: 200px;
    /* background: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    border: 1px solid black;
    margin-top: 50px;
    margin-left: 80px;

`;

export const ContainerInfo = styled.View`
    width: 350px;
    height: 350px;
    /* background: red; */
    flex-direction: row;
    margin-top: 30px;
    justify-content: space-between;

`;


export const ContainerIcons = styled.View`
    width: 50px;
    min-height: 20px;
    height: auto;
    /* background: blue; */
    flex-direction: column;
    justify-content: space-around;
`;


export const ContainerInput = styled.View`
    width: 270px;
    min-height: 20px;
    height: auto;
    /* background: yellow; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const CaixaIcon = styled.View`
    height: 50px;
    /* background: firebrick; */
    margin-bottom: 15px;
    align-items: center;
    justify-content: center;
`;

// export const InfoInput = styled.TextInput`
//     min-height: 30px;
//     height: auto;
//     background: firebrick;
// `;

export const CaixaInput = styled.View`
    height: 30px;
    /* background: blue; */
    border-bottom-color: black;
    justify-content: flex-end;
    border: 1px solid transparent;
    border-bottom-color: black;

`;

export const BotãoCadastrar = styled.TouchableOpacity`
    height: 50px;
    background: #F87700;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
`;

