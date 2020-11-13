import styled from 'styled-components/native';

export const ContainerAtendimento = styled.View`
    margin-top: 25px;
    padding: 0 16px;
    /* background: #000; */
    
`;

export const Header = styled.View`
    width: 350px;
    height: 50px;
    /* background: yellow; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ContainerTitulo = styled.View`
    width: 120px;
    /* background: red; */
    display: flex;
    align-items: center;
    /* justify-content: center; */
    
`;

export const Titulo = styled.Text`
    color: #000;
    font-size: 16px;
    font-weight: bold;
    /* align-items: center; */


`;

export const ConjuntoEsquerdo = styled.View`
    width: 150px;
    height: 25px;
    /* background: blue; */
    flex-direction: row;
    justify-content: space-between;
`;

export const BotaoMinha = styled.TouchableOpacity`
    color: #000;
    
`;


export const BotaoTodos = styled.TouchableOpacity`
    color: #000;
    border: 1px solid blue;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;


export const Card = styled.View`
    height: 140px;
    border: 1px solid black;
    border-radius: 8px;
    /* margin-top: 5px; */
    padding: 15px;
`;

export const CardBody = styled.View`
    margin-top: 10px;
    /* background: red; */
`;
export const Username = styled.Text`
    color: #000;
    font-size: 20px;
`;


export const CardHeader = styled.View`
    flex-direction: row;
    align-items: center;

`;


export const Descricao = styled.Text`
    color: #000;
    font-size: 16px;
    margin-left: 15px;

`;


export const User = styled.Image``;

export const CardFooter = styled.View`
    height: 30px;
    /* background-color: #000; */
    margin-top: 3px;
    flex-direction: row;
    justify-content: center;
`;

export const Detalhes = styled.View`
    width: 250px;
    height: 20px;
    /* background-color: red; */
    flex-direction: row;
`;

export const Valor = styled.Text`
    color: #000;
    font-size: 14px;
`;

export const ValorRecebido = styled.Text`
    color: green;
    font-size: 14px;
`;


export const Emojis = styled.View`
    width: 100px;
    height: 20px;
    /* background: yellow; */
    flex-direction: row;
`;

export const BotaoLike = styled.TouchableOpacity``;

export const Like = styled.Text`
    color: #000;
    padding-left: 5px;
`;

export const BotaoChat = styled.TouchableOpacity`
    color: #000;
    padding-left: 20px;
`;

export const Chat = styled.Text`
    padding-left: 5px;
`;