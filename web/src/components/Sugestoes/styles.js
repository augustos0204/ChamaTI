import styled from 'styled-components/native';

export const ContainerSugestao = styled.ScrollView.attrs(() => ({
    horizontal: true,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 16,
    },
}))`

    background: #FFF;
    height: 110px;
    border: 1px solid black;
    margin-top: 10px;
    
`;

export const Img = styled.Image``;

export const Label = styled.Text`
    color: #000;
    font-weight: bold;
    margin-top: 5px;
    font-size: 14px;
`;

export const Option = styled.TouchableOpacity`
    width: 80px;
    margin-right: 16px;
    align-items: center;

`;
