const { Op } = require("sequelize");
const Cliente = require("../models/Cliente");
const bcrypt = require("bcryptjs");
// const { update } = require("../models/Cliente");
// const jwt = require("jsonwebtoken");
// const authConfig = require('../config/auth.json');

module.exports = {
    // Listar todos os clientes
    async list( request, response ) {
        const clientes = await Cliente.findAll();

        console.log(clientes);

        response.send( clientes );
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
        response.send( cliente );
    },

    // Inserções
    async store(request, response){
        const {
            nome,
            email,
            senha,
            data_nascimento,
            rg,
            cpf,
            foto
        } = request.body;

        // Verificar se o cliente já existe
        //      select * from clientes where rg = ? or email = ? or cpf = ?
        let cliente = await Cliente.findOne(
            {
                 where: {
                    [ Op.or ] : [
                        { email : email },
                        { rg : rg },
                        { cpf : cpf },
                    ]
                 }
            }
        );

        if ( cliente ) { 
            return response.status( 400 ).send( { erro : "Cliente já cadastrado." } )
        }

        const senhaCripto = await bcrypt.hash(senha, 10);

        if( foto ){
            cliente = await Cliente.create({
                nome, email, senha: senhaCripto, data_nascimento, rg, cpf, foto
            });
        }
        else {
            cliente = await Cliente.create({
                nome, email, senha: senhaCripto, data_nascimento, rg, cpf
            });
        }

        // const token = jwt.sign({ alunoId : aluno.id }, authConfig.secret );

        response.status(201).send({
            cliente: {
                cliente_id: cliente.id_cliente,
                nome: cliente.nome,
                cpf: cliente.cpf
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