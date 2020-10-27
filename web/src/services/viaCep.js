import axios from "axios";

const api = axios.create({
  baseURL: "http://viacep.com.br/ws/",
});

export const buscarViaCep = (cep) => api.get(`${cep}/json`);

