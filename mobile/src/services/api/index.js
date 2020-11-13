import axios from 'axios';

export const api = axios.create({
    baseUrl: "http://192.168.0.18:3333/"
});

export const teste = async () => {
    console.log( await axios.get('/sexos_prestadores_servicos') );
}