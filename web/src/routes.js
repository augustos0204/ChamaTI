import React from "react";

import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import MakeService from "./pages/createService"
import DetalhesServices from "./pages/detalhesService"
import {isSignedIn} from "./services/security"

const PrivateRoute = ({ children, location, ...rest}) => {

    return isSignedIn() ? (
        <Route {...rest}>{children}</Route>
    ) : (
        <Redirect
            to={{
                pathname: "/",
                state: {from: location},
            }}
        />
    );
};

const InitialRoute = ({ children, location, ...rest}) => {
    return !(isSignedIn()) ? (
        <Route {...rest}>{children}</Route>
    ) : (
        <Redirect
            to={{
                pathname: "/home",
                state: {from: location},
            }}
        />
    );
}

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <InitialRoute exact path="/">
                    <Login/>
                </InitialRoute>
                <PrivateRoute path="/home">
                    <Home/>
                </PrivateRoute>
                <PrivateRoute path="/services/create">
                    <MakeService/>
                </PrivateRoute>
                <PrivateRoute path="/services/detalhes">
                    <DetalhesServices/>
                </PrivateRoute>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;