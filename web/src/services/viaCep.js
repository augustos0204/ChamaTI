import axios from "axios";

const viacep = axios.create({
  baseURL: "http://viacep.com.br/ws/",
});

const postmon = axios.create({
  baseURL: "https://api.postmon.com.br/v1/cep/",
});

export const buscarViaCep = (cep) => viacep.get(`${cep}/json`);

export const buscarPostmon = (cep) => postmon.get(`${cep}`);

