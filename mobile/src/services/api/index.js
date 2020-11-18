const axios = require('axios');

export const api = axios.create({
    baseUrl: "http://192.168.0.18:3333/"
});

export async function login ( email, senha ) {
    try {
        const response = await api.get('/sessao/cliente', {
            params: {
                email,
                senha
            }
        });
        
        console.log(response);

        return response
    } catch (error) {
        console.log(error);
    }
    
}