const axios = require('axios');

export const api = axios.create({
    baseUrl: "http://192.168.0.18:3333/"
});

export async function login ( params ) {
    try {
        const response = await api.post('/sessao/cliente', {
            params
        });
        
        console.log(response);

        return response
    } catch (error) {
        console.log(error);
    }
    
}