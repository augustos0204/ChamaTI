const Servico = require("../models/Servico");
const Cliente = require("../models/Cliente");

module.exports = {
    async list( request, response ) {
        console.log("Entrou");
        
        const servicos = await Servico.findAll();

        response.send( servicos );
    },

    async listByAtendimento( request, response  ){
        const user_access = request.user_access;

        if( user_access !== "prestador_servicos" ){
            return response.status( 403 ).send( { erro : "Acesso negado." } );
        }

        const servicos = await Servico.findAll({
            where: {
                em_atendimento: false
            }
        });

        response.send( servicos );
    },

    async searchById( request, response ){
        const { id } = request.params;

        let servico = await Servico.findByPk( id, { raw : true } );

        if( !servico ){
            return response.status( 404 ).send( { erro : "Endereço não encontrado." } )
        }

        response.send( servico );
    },

    async listByClient( request, response ){
        const user_access = request.user_access;

        if( user_access !== "cliente" ){
            return response.status( 403 ).send( { erro : "Acesso negado." } );
        }

        const cliente_id = request.user_id;

        let servicos = await Servico.findAll({
            where: {
                ClienteId : cliente_id
            }
        })

        return response.send(servicos);
    },

    async store(request, response){
        const user_access = request.user_access;

        if( user_access !== "cliente" ){
            return response.status( 403 ).send( { erro : "Acesso negado." } );
        }

        const cliente_id = request.user_id;

        const {
            problema,
            descricao,
            data_hora_abertura,
            data_hora_encerramento,
            em_aberto,
            em_atendimento,
            resolvido_por,
        } = request.body;

        let cliente = await Cliente.findByPk( cliente_id );

        if(!cliente){
            return response.status( 404 ).send( { erro : "Cliente não encontrado." } );
        }

        let servico = await cliente.createServico({
            problema,
            descricao,
            data_hora_abertura,
            data_hora_encerramento,
            em_aberto,
            em_atendimento,
            resolvido_por,
        })

        if( !servico ){
            return response.status( 404 ).send( { erro : "Cadastro mal sucedido." } );
        }

        return response.status(201).send({
            servico
        });
    },
}