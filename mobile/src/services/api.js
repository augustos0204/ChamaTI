import axios from 'axios';

export const api = axios.create({
    baseUrl: "http://192.168.0.18:3333/"
});