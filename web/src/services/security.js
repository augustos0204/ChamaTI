import {api} from "./api";

const CHAVE_CLIENTE = "@cliente";

export const signIn = (cliente) => {
    localStorage.setItem(CHAVE_CLIENTE, JSON.stringify(cliente));

    api.defaults.headers.common['Authorization'] = `Bearer ${cliente.token}`;
};

export const signOut = () => {
    localStorage.clear();

    api.defaults.headers.common['Authorization'] = undefined;
};

export const getCliente = () => {
    const { cliente } = JSON.parse(localStorage.getItem(CHAVE_CLIENTE));

    return cliente;
};

export const isSignedIn = () => {
    const cliente = JSON.parse(localStorage.getItem(CHAVE_CLIENTE));

    if (cliente) {
        api.defaults.headers.common['Authorization'] = `Bearer ${cliente.token}`;
    }

    return cliente ? true : false;
};