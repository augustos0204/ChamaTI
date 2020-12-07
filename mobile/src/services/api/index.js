const axios = require('axios');

export const api = axios.create({
    // baseURL: "http://10.0.0.2:3333/"
    // baseURL: "http://192.168.0.18:3333/"
    baseURL: "https://chamati.herokuapp.com/"
});

export function loginCliente ( params ) {
    // return console.log(params);
    return api.post('/sessao/cliente', params);
}

export function loginPrestadorServicos ( params ) {
    return api.post('/sessao/prestador_servicos', params );
}

export function signUpCliente ( params ) {
    return api.post('/cliente', params);
}

export function signUpPrestadorServicos ( params ) {
    return api.post('/prestador_servicos', params);
}