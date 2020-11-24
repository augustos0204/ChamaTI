import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3333/"
});

export const searchUser = async (id) => {
    const response = await api.get(`/cliente/${id}`);
    return response;
}

export const getAllSexoUser = async () => {
    const response = await (await api.get(`/sexos_clientes/`)).data;
    return response;
}

export const getAllServices = async () => {
    const response = await (await api.get(`/servicos/`));
    return response;
}