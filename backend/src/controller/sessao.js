const Cliente = require("../models/Cliente");
const PrestadorServicos = require("../models/PrestadorServicos");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require('../config/auth.json');

module.exports = {
    async clienteAutenticate ( request, response ) {
        const { email, senha } = request.body;

        // Busca um cliente com o email informado
        const cliente = await Cliente.findOne({
            where: {
                email,
            }
        });

        // Verifica se o cliente existe e a senha corresponde a senha informada
        if( !cliente || !( await bcrypt.compare( senha, cliente.senha ) ) ){
            return response.status(403).send({erro : "Email e/ou senha incorretos."});
        }

        // Gera um token que valida a autenticação do cliente
        const token = jwt.sign({ alunoId: cliente.id }, authConfig.secret);

        return response.status(201).send({
            cliente: {
                id: cliente.id,
                nome: cliente.nome,
            },
            token
        });
    },

    async prestadorServicoAutenticate ( request, response ) {
        const { email, senha } = request.body;

        // Busca um cliente com o email informado
        const prestador_servicos = await PrestadorServicos.findOne({
            where: {
                email,
            }
        });

        // Verifica se o prestador serviço existe e a senha corresponde a senha informada
        if( !prestador_servicos || !( await bcrypt.compare( senha, prestador_servicos.senha ) ) ){
            return response.status(403).send({erro : "Email e/ou senha incorretos."});
        }

        // Gera um token que valida a autenticação do prestador serviço
        const token = jwt.sign({ alunoId: prestador_servicos.id }, authConfig.secret);

        return response.status(201).send({
            prestador_servicos: {
                id: prestador_servicos.id,
                nome: prestador_servicos.nome,
            },
            token
        });
    }
}