import styled from 'styled-components/native';

export const SeguraContainer = styled.View`
    justify-content: center;
    align-items: center;
`;

export const ContainerHistorico = styled.View`
    width: 350px;
    min-height: 200px;
    height: auto;
    /* background: blue; */
    /* margin-left: 35px; */
    border-radius: 10px;
    background: #C4C4C4;
    display: flex;
    /* flex-direction: row; */


`;

export const CardHeader = styled.View`
    /* width: 10px; */
    height: 80px;
    /* background: yellow; */
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    border: 1px solid  #C4C4C4;
    border-bottom-color: #000;
   
  
`;


export const CardBody = styled.View`
    /* width: 10px; */
    min-height: 100px;
    height: auto;
    /* background: blue; */
    border-radius: 10px;
    flex-direction: column;
    justify-content: space-between;

`;


export const CardFooter = styled.View`
    /* width: 10px; */
    height: 50px;
    /* background: yellow; */
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

export const StorePhoto = styled.Image`
    margin-top: 5px;
    margin-left: 10px;
`;

export const InfoStore = styled.View`
    /* background: red; */
    height: 70px;
    margin-left: 10px;
`;

export const StoreName = styled.Text`
    font-size: 19px;
    font-weight: bold;
    align-self: center;
    margin-top: 15px;
    
`;


export const StatusPedido = styled.Text`
    font-size: 12px;
    color: #000;
    font-weight: bold;
`;


export const Servico = styled.View`
    /* width: 20px; */
    height: 20px;
    /* background: red; */
    margin-left: 10px;
    margin-top: 10px;
    padding-left: 5px;
    /* border: 1px solid #000; */
    flex-direction: row;
`;


export const NumServico = styled.View`
    width: 20px;
    /* height: 5px; */
    /* background: blue; */
    border: 1px solid black;
    padding-left: 5px;

`;

export const Stars = styled.View`
    height: 30px;
    /* background: red; */
    flex-direction: row;
    align-items: center;
    border: 1px solid  #C4C4C4;
    border-top-color: #000;
    border-bottom-color: #000;
    border-radius: 5px;
    margin-top: 10px;
    
`;

export const BtnDetalhes = styled.TouchableOpacity`
    /* background: red; */
    justify-content: center;
    align-items: center;
    
`;

export const LabelDetalhes = styled.Text`
    font-size: 17px;
    color: #F87700;
    
`;

export const TipoServico = styled.View`
    width: 200px;
    /* height: 10px; */
    background: yellow;
    margin-left: 5px;
`;


