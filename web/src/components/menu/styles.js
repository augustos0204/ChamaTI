import styled, {keyframes} from 'styled-components';

export const ContainerMenu = styled.figure`
    width: 45px;
    height: 55px;
    float: left;
    margin-left: 10px;
    display: block;
    padding-top: 3.5px;
    padding-bottom: 3.5px;
    overflow: hidden;
`;

export const ContainerMenuImage = styled.img`
    padding: 5px;
    /* border-radius: 100%; */
    cursor: pointer;
    margin-top: 3px;
    -webkit-filter:grayscale(100%);
    filter: grayscale(100%);
    filter: gray;
    transition: 0.5s;

    &:hover{
        filter: none;
    }
`;

export const ContainerMenuItens = styled.div`
    width: 250px;
    min-height: 100px;
    height: auto;
    background-color: var(--color-sLight);
    position: absolute;
    left: -250px;
    margin-top: -2px;
    opacity: 0;
    padding-bottom: 30px;
    transition: 0.5s;
    box-shadow: 0px 0px 10px black;
    border-bottom-right-radius: 10px;
    filter: blur(5px);

    ${ContainerMenu}:hover & {
        left: 0;
        opacity: 1;
        filter: none;
    }
`;

export const ContainerPerfil = styled.div`
    width: inherit;
    min-height: 200px;
    height: auto;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-gray);
`;

const changePrimaryColors = keyframes`
    /* 0% {background-color: var(--color-white);} */
    0% {background-color: var(--color-light);}
    25% {background-color: var(--color-primary);}
    50% {background-color: var(--color-dark);}
    75% {background-color: var(--color-primary);}
    100% {background-color: var(--color-light);}
`;

export const FigurePerfil = styled.figure`
    width: 100px;
    height: 100px;
    border-radius: 50vh;
    object-fit: cover;
    background-color: var(--color-primary);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    padding: 3px;
    overflow: hidden;
    animation: ${changePrimaryColors} 3s infinite;
    margin-bottom: 10px;
`;

export const ImagemPerfil = styled.img`
    border-radius: inherit;
    background-color: aqua;
`;

export const FigureCaption = styled.figcaption`
    width: 100px;
    height: 100px;
    border-radius: 50vh;
    background-color: rgba(0, 0, 0, 0.5);
    margin-top: -4px;
    margin-left: -3px;
    display: none;
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.1em;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    user-select: none;
    cursor: pointer;

    ${FigurePerfil}:hover &{
        display: flex;
    }
`;

export const NomePerfil = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1em;
    user-select: none;
    margin-bottom: 10px;
`;

export const LogoutButton = styled.button`
    width: 130px;
    min-height: 0px;
    height: auto;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1em;
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
    border-radius: 20px;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 5px;
    cursor: pointer;
    background-color: transparent;
    margin-bottom: 10px;

    &:hover{
        transition: 0.5s;
        background-color: var(--color-primary);
        color: var(--color-gray);
    }
`;

export const MenuItem = styled.div`
    width: 100%;
    height: 45px;
    background-color: var(--color-secondary);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1em;
    user-select: none;
    cursor: pointer;
    text-transform: uppercase;
    border-bottom: 2px solid var(--color-sDark);

    &:hover {
        transition: 0.5s;
        background-color: var(--color-primary);
        color: var(--color-secondary);
    }
`;

export const SubMenuItem = styled.div`
    width: 100%;
    height: 45px;
    background-color: var(--color-secondary);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1em;
    user-select: none;
    cursor: pointer;
    text-transform: uppercase;
    border-bottom: 2px solid var(--color-sDark);

    &:hover {
        transition: 0.5s;
        background-color: var(--color-primary);
        color: var(--color-secondary);
    }
`;

export const ContainerSubmenu = styled.div`
    width: 250px;
    min-height: 45px;
    height: auto;
    position: absolute;
    background-color: var(--color-sLight);
    margin-left: 100px;
    display: none;
    transition: 0.5s;
    overflow: hidden;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    ${SubMenuItem}:hover & {
        display: block;
        margin-left: 250px;
    }

    & :hover{
        border-left: 1px solid black;
    }
`;