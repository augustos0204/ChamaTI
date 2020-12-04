import axios from "axios";

//192.168.100.80

export const api = axios.create({
    baseURL: "http://localhost:3333/"
});

export const searchUser = (id) => {
    return api.get(`/cliente/${id}`);
}

export const getAllSexoUser = async () => {
    return (await api.get(`/sexos_clientes/`)).data;
}

export const getAllServices = () => {
    return api.get(`/servicos/`);
}

export const searchServiceById = (id) => {
    return api.get(`/servico/${id}`);  
}

export const getClientLogedServices =  () => {
    return api.get(`/cliente/servicos`);
}
