import React from "react";

import foto from "../../assets/menu.png";

const Header = () => {

    return (
        <header style={{
            position: "fixed",
        }}>
            <container
            className="container">

                <containerMenuPage
                className="containerMenuPage">
                    
                    <containerMenu
                    className="containerMenu">
                        <img src={foto} alt="Ícone Menu" title="Ícone Menu"/>
                    </containerMenu>
                    <containerMenuItens 
                    className="containerMenuItens">

                    </containerMenuItens>
                    <containerPageName
                    className="containerPageName">

                        Login
                        <pageNameBarra
                        className="pageNameBarra">
                        </pageNameBarra>

                    </containerPageName>

                </containerMenuPage>
            </container>
        </header>
    );
}

export default Header;