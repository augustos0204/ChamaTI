import styled from "styled-components";

export const ContainerConteudoPage = styled.div`
    width: 800px;
    min-height: 1px;
    height: auto;
    display: block;
    line-height: 1.5;
    letter-spacing: 0.5px;
    position: absolute;
    margin-top: 70px;
    z-index: 1;
    overflow: auto;
    background-color: var(--color-white);
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 0 10px black;
    margin-bottom: 10px;
`;

export const ContainerCabecalho = styled.div`
    width: 100%;
    height: 45px;
    margin-bottom: 10px;
    padding-top: 2px;
`;

export const ButtonVoltar = styled.div`
    width: 120px;
    height: 40px;
    background-color: var(--color-light);
    border-radius: 10px;
    transition: 0.5s;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1em;
    color: white;
    float: left;
    &:hover{
        background-color: var(--color-primary);
    }
`;

export const ContainerDataService = styled.div`
    width: 240px;
    height: 40px;
    float: right;
    display: flex;
    flex-direction: row;
    border: 2px solid black;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    user-select: none;
    transition: 0.5s;
    background-color: white;

    &:hover{
        filter: invert(100%);
        background-color: white;
        border-color: white;
    }
`;

export const ContainerIconeRelogio = styled.figure`
    width: 30px;
    height: 30px;
`;

export const ContainerTextData = styled.div`
    width: 180px;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.1em;
    font-family: Arial, Helvetica, sans-serif;
`;

export const TitleService = styled.div`
    width: 100%;
    min-height: 0px;
    height: auto;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.8em;
    text-align: center;
    border-bottom: 2px solid black;
    border-radius: 5px;
    margin-bottom: 10px;
`;

export const DescricaoProblema = styled.div`
    width: 100%;
    height: 250px;
    font-size: 1.1em;
    text-align: justify;
    overflow-y: scroll;
    padding: 10px;
    border-bottom: 2px solid black;
    border-radius: 5px;
    margin-bottom: 10px;
`;

export const StatusService = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 2px solid black;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 1.1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
`;

export const ClientInformation = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    overflow: hidden;
    border: 2px solid black;
`;

export const UserContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    transition: 0.5s;

    &:hover{
        color: var(--color-primary);
        text-decoration: underline;
    }
`;

export const PhotoSide = styled.figure`
    width: 70px;
    height: 70px;
    background-color: crimson;
`;

export const InfoSide = styled.div`
    width: 313px;
    height: 100%;
`;
export const UserType = styled.div`
    width: 100%;
    height: 25px;
    color: white;
    font-size: 1.1em;
    background-color: var(--color-primary);
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
`;

export const UserName = styled.div`
    width: 100%;
    height: 45px;
    background: linear-gradient(to bottom, #bfbfbf 10%, #ffffff 100%);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
`;
