const bcrypt = require("bcryptjs");

const Cliente = require("../models/Cliente");
const EnderecoCliente = require("../models/EnderecoCliente");

// const { update } = require("../models/Cliente");
// const jwt = require("jsonwebtoken");
// const authConfig = require('../config/auth.json');

module.exports = {
    // Listar todos os clientes
    async list( request, response ) {
        const clientes = await Cliente.findAll();

        return response.send( clientes );
    },

    // Buscar clientes pelo ID
    async searchById( request, response ){
        const { id } = request.params;

        let cliente = await Cliente.findByPk( id, { raw : true } );

        // Verifica se o cliente não foi encontrado
        if( !cliente ){
            return response.status( 404 ).send( { erro : "Cliente não encontrado." } )
        }

        // Apaga o campo senha da resposta para não mostrá-la a quem solicitou a busca
        delete cliente.senha;

        // Retorna o cliente encontrado
        return response.send( cliente );
    },

    // Inserções
    async store(request, response){
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

        // Verificar se o cliente já existe
        //      select * from clientes where rg = ? or email = ? or cpf = ?
        let cliente = await Cliente.findOne(
            {
                 where: {
                    email : email
                 }
            }
        );

        if ( cliente ) { 
            return response.status( 400 ).send( { erro : "Cliente já cadastrado." } )
        }

        const senhaCripto = await bcrypt.hash(senha, 10);

        if( foto ){
            cliente = await Cliente.create({
                nome, email, senha: senhaCripto, data_nascimento, cpf, telefone, foto, sexo_cliente_id : sexo_id
            });
        }
        else {
            cliente = await Cliente.create({
                nome, email, senha: senhaCripto, data_nascimento, cpf, telefone, sexo_cliente_id : sexo_id
            });
        }

        let cliente_id = cliente.id;
        let endereco_cliente;

        if(cliente){
            endereco_cliente = await EnderecoCliente.create({
                cep, logradouro, bairro, cidade, estado, numero, complemento, cliente_id
            });
        }
        else {
            return response.status( 400 ).send( { erro : "Erro ao cadastrar o cliente. Tente novamente." } )
        }

        if( !endereco_cliente ){
            return response.status( 400 ).send( { erro : "Erro ao cadastrar o endereco. Tente novamente." } )
        }

        // const token = jwt.sign({ alunoId : aluno.id }, authConfig.secret );

        return response.status(201).send({
            cliente: {
                cliente_id: cliente.id_cliente,
                nome: cliente.nome,
                cpf: cliente.cpf,
                endereco: {
                    logradouro : endereco_cliente.logradouro,
                    bairro : endereco_cliente.bairro,
                    cidade : endereco_cliente.cidade,
                    estado : endereco_cliente.estado,
                    numero : endereco_cliente.numero,
                    complemento : endereco_cliente.complemento,
                }
            },
            // token
        });
    },

    async update( request, response ){
        const { id } = request.params;

        let cliente = await Cliente.findByPk( id, { raw : true } );

        // Verifica se o cliente não foi encontrado
        if( !cliente ){
            return response.status( 404 ).send( { erro : "Cliente não encontrado." } )
        }

        const {
            nome,
            email,
            senha,
            foto
        } = request.body;

        const senhaCripto = await bcrypt.hash(senha, 10);

        let update;

        if( foto ){
            update = cliente.update({
                nome, email, senha: senhaCripto, foto
            });
        }
        else {
            update = cliente.update({
                nome, email, senha: senhaCripto
            });
        }

        // const token = jwt.sign({ alunoId : aluno.id }, authConfig.secret );

        // Apaga o campo senha da resposta para não mostrá-la a quem solicitou a busca
        delete cliente.senha;

        if(update){
            // Retorna o cliente encontrado
            response.send( cliente );
        }
        else{
            return response.status( 404 ).send( { erro : "Atualização mal sucedida, tente novamente." } )
        }
    },

    async delete( request, response ){
        const { id } = request.params;

        let cliente = await Cliente.findByPk( id, { raw : true } );

        // Verifica se o cliente não foi encontrado
        if( !cliente ){
            return response.status( 404 ).send( { erro : "Cliente não encontrado." } )
        }

        let deleta = cliente.destroy;

        if(deleta){
            return response.status( 404 ).send( { erro : "Cliente excluído com sucesso." } )
        }
        else {
            return response.status( 404 ).send( { erro : "Falha na exclusão do cliente." } )
        }
    }
}