const bcrypt = require("bcryptjs");

const PrestadorServicos = require("../models/PrestadorServicos");

// const { update } = require("../models/Cliente");
// const jwt = require("jsonwebtoken");
// const authConfig = require('../config/auth.json');

module.exports = {
    // Listar todos
    async list(request, response) {
        const prestadores_servicos = await PrestadorServicos.findAll();

        return response.send(prestadores_servicos);
    },

    // Buscar pelo ID
    async searchById(request, response) {
        const { id } = request.params;

        let prestador_servicos = await PrestadorServicos.findByPk(id, { raw: true });

        // Verifica se o cliente não foi encontrado
        if (!prestador_servicos) {
            return response.status(404).send({ erro: "Prestador de serviços não encontrado." })
        }

        // Apaga o campo senha da resposta para não mostrá-la a quem solicitou a busca
        delete prestador_servicos.senha;

        // Retorna o cliente encontrado
        return response.send(prestador_servicos);
    },

    // Inserções
    async store(request, response) {
        console.log("-------------------- Inserção de um prestador de serviços -----------------------");
        const {
            sexo_id,

            cep,
            logradouro,
            bairro,
            cidade,
            estado,
            numero,
            complemento,

            nome,
            email,
            senha,
            data_nascimento,
            cpf,
            telefone,
            foto
        } = request.body;

        try {

            // Verificar se o cliente já existe
            //      select * from clientes where rg = ? or email = ? or cpf = ?
            let prestador_servicos = await PrestadorServicos.findOne(
                {
                    where: {
                        email: email
                    }
                }
            );

            if (prestador_servicos) {
                return response.status(400).send({ erro: "Email já cadastrado." })
            }

            const senhaCripto = await bcrypt.hash(senha, 10);

            if (foto) {
                prestador_servicos = await PrestadorServicos.create({
                    nome, email, senha: senhaCripto, data_nascimento, cpf, telefone, foto, sexo_prestador_servicos_id: sexo_id
                });
            }
            else {
                prestador_servicos = await PrestadorServicos.create({
                    nome, email, senha: senhaCripto, data_nascimento, cpf, telefone, sexo_prestador_servicos_id: sexo_id
                });
            }

            let endereco_prestador_servicos;

            if (prestador_servicos) {
                endereco_prestador_servicos = await prestador_servicos.createEnderecoPrestadorServico({
                    cep,
                    logradouro,
                    bairro,
                    cidade,
                    estado,
                    numero,
                    complemento,
                });
            }
            else {
                return response.status(400).send({ erro: "Erro ao cadastrar o prestador de serviços. Tente novamente." })
            }

            if (!endereco_prestador_servicos) {
                return response.status(400).send({ erro: "Erro ao cadastrar o endereco. Tente novamente." })
            }

            // const token = jwt.sign({ alunoId : aluno.id }, authConfig.secret );

            return response.status(201).send({
                prestador_servicos: {
                    prestador_servicos_id: prestador_servicos.id_prestador_servicos,
                    nome: prestador_servicos.nome,
                    cpf: prestador_servicos.cpf,
                    endereco: {
                        logradouro: endereco_prestador_servicos.logradouro,
                        bairro: endereco_prestador_servicos.bairro,
                        cidade: endereco_prestador_servicos.cidade,
                        estado: endereco_prestador_servicos.estado,
                        numero: endereco_prestador_servicos.numero,
                        complemento: endereco_prestador_servicos.complemento,
                    }
                },
                // token
            });
        } catch (e) {
            console.error(e)
        }
    },

    //Terminar de implementar
    async update(request, response) {
    },

    //Terminar de implementar
    async delete(request, response) {
    }
}