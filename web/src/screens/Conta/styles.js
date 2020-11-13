import styled from 'styled-components';

export const InfoImage = styled.Image`
    width: 50px;
    height: 50px;
    color: blue;
    /* border: 1px solid black; */
    border-radius: 15px;
    margin-left: 20px;
    
`;

export const Avatar = styled.Image`
    width: 80px;
    height: 80px;
`;


export const ContainerInfo = styled.View`
    /* height: 100px; */
    /* background: blue; */
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    flex-direction: column;


`;


export const ContainerLocal = styled.View`
    /* height: 50px; */
    /* background: red; */
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;


export const Local = styled.Text`
    font-size: 15px;
    color: black;
    padding-left: 5px;
`;

export const Name =  styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: black;
`;

export const ContainerDados = styled.View`
    min-height: 300px;
    height: auto;
    /* background: yellow; */
    margin-top: 80px;


`;

export const CaixaInfo = styled.TouchableOpacity`
    min-height: 80px;
    height: auto;
    flex-direction: row;
    /* background: red; */
    display: flex;
    padding: 15px 10px;
    border: 1px solid black;
    
    
`;

export const CardInfo = styled.View`
    /* background: blue; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
`;


export const Label = styled.Text`
    color: black;
`;


export const LabelTitle = styled.Text`
    font-size: 19px;
    font-weight: bold;
    color: black;
`;

export const Next =  styled.View`
    /* background: yellow; */
    margin-left: 130px;
    justify-content: center;
    
`;






