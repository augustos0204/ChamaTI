import styled from "styled-components";

export const ContainerAlertInfo = styled.div`
    width: 300px;
    min-height: 100px;
    height: auto;
    position: absolute;
    background-color: var(--color-white);
    top: 0;
    right: 0;
    margin-top: 10px;
    margin-right: 10px;
    border-radius: 10px;
    border: 2px solid var(--color-gray);
    overflow: hidden;
`;

export const ContainerTopTitle = styled.div`
    width: 100%;
    height: 35px;
`;

export const ContainerContent = styled.div`
    width: 100%;
    min-height: 60px;
    height: auto;
    background-color: var(--color-white);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CloseButton = styled.div`
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 100%;
    position: absolute;
    margin-left: 269px;
    margin-top: 5px;
`;

export const AlertText = styled.div`
    width: 100%;
    min-height: 1ch;
    height: auto;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1em;
    color: var(--color-primary);
    text-align: center;
`;