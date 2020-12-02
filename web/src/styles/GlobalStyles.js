import {createGlobalStyle} from "styled-components";

import {LobsterFontFace} from "./Fonts";

export const GlobalStyles = createGlobalStyle`
    ${LobsterFontFace};
/* CSS GLOBAL */

    :root{

        /* Cores Primárias */
        --color-primary: #E94014;
        --color-light: #ff7543;
        --color-dark: #ae0000;

        --color-accent: #000000;
        --color-white: #fafafa;

        /* Cores Secundárias */
        --color-secondary: #1f1f1f;
        --color-sLight: #464646;
        --color-sDark: #000000;

        /* Cores Padronizadas */
        --color-gray: #c4c4c4;
    }

    ::-webkit-scrollbar{
        width: 3px;
    }

    ::-webkit-scrollbar-thumb{
        background: linear-gradient(45deg, var(--color-primary), var(--color-light));
        border-radius: 5px;
        box-shadow: 0 0 5px 1px #fe9901;

    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    body{
        font-family: Arial, Helvetica, sans-serif;
        background-color: #e8e8e8;
    }


    img{
        width: 100%;
        height: 100%;
    }

    .textLogin, .numberLogin{
        width: 280px;
        height: 40px;
        border: none;
        border-bottom: 3px solid black;
        border-radius: 2px;
        padding: 10px;
        font-size: 1.1em;
        margin-bottom: 10px;
        margin-left: auto;
        margin-right: auto;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        background-color: inherit;
    }

    .numberLogin::-webkit-inner-spin-button,
    .numberLogin::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    select{
        width: 130px;
        height: 30px;
        font-size: 1.0em;
        border-radius: 10px;
        text-align: center;
        border-color: var(--color-light);
    }

    .container{
        width: 1200px;
        min-height: 10px;
        height: auto;
        margin: 0 auto;
        display: block;
        box-shadow: 0px 0px 20px black;
    }

/* Header da Página */

    header{
        width: 100%;
        min-height: 5px;
        height: auto;
        display: fixed;
        z-index: 999;
    }

    header .container{
        width: 100%;
        box-shadow: none;
    }

    .containerMenuPage{
        width: 100%;
        height: 55px;
        display: block;
        position: relative;
        background-color: var(--color-secondary);
        z-index: 999;
    }

/* Nome da página */

    .containerPageName{
        width: 200px;
        height: 100%;
        float: right;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        font-family: Arial, Helvetica, sans-serif;
        color: var(--color-primary);
        font-size: 1.2em;
        user-select: none;
        text-transform: uppercase;
    }

    .pageNameBarra{
        width: 15px;
        height: 100%;
        background-color: var(--color-primary);
        display: block;
        margin-left: 10px
    }

    .containerConteudoPage{
        width: 100%;
        min-height: 100px;
        height: auto;
        display: block;
        background-color: var(--color-white);
        line-height: 1.5;
        letter-spacing: 0.5px;
    }

    .logoFont{
        font-family: 'lobster'
    }

`;