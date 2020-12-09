import styled from 'styled-components/native';


export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 16,
    },
}))`

    background-color: red;
`;

export const Wrapper = styled.View`
    height: 130px;
`;

export const Option = styled.TouchableOpacity``;


export const Img = styled.Image``;


export const Label = styled.Text``;

