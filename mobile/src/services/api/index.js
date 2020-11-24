const axios = require('axios');

export const api = axios.create({
    baseUrl: "http://10.0.0.2:3333/"
});

export function loginCliente ( params ) {
    return api.post('/sessao/cliente', {
        params
    });
}

export function loginPrestadorServicos ( params ) {
    return api.post('/sessao/prestador_servicos', {
        params
    });
}