import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --color-primary: #E94014;
        --color-light: #ff7543;
        --color-dark: #ae0000;
        --color-accent: #000000;
        --color-white: #fafafa;
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
        width: inherit;
        height: inherit;
    }

    input[type="text"], input[type="email"], input[type="password"]{
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
        min-height: 100px;
        height: auto;
        margin: 0 auto;
        display: block;
        box-shadow: 0px 0px 20px black;
    }

    header{
        width: 100%;
        min-height: 5px;
        height: auto;
        display: block;
    }

    header .container{
        width: 100%;
        box-shadow: none;
    }

    .containerMenuPage{
        width: 100%;
        height: 55px;
        display: block;
        flex-direction: row;
        position: relative;
        background-color: var(--color-white);
        /* box-shadow: 0 4px 2px -2px gray; */
    }

    .containerMenu{
        width: 40px;
        height: 40px;
        float: left;
        margin-top: 10px;
    }

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
        font-size: 1.5em;
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

`;