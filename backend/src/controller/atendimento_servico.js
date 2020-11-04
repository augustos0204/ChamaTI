const PrestadorServicos = require("../models/PrestadorServicos");
const AtendimentoServico = require("../models/AtendimentoServico");
const Servico = require("../models/Servico");

module.exports = {
    async list( request, response ) {
        const atendimentos_servicos = await AtendimentoServico.findAll();

        response.send( atendimentos_servicos );
    },

    async searchById( request, response ){
        const { id } = request.params;

        let atendimento_servico = await AtendimentoServico.findByPk( id, { raw : true } );

        if( !atendimento_servico ){
            return response.status( 404 ).send( { erro : "Atendimento não encontrado." } )
        }

        return response.send( atendimento_servico );
    },

    async store(request, response){
        const prestador_servicos_id = request.user_id;

        const {
            data_hora_inicio,
            data_hora_termino,
            servico_id,
        } = request.body;

        let prestador_servicos = await PrestadorServicos.findByPk( prestador_servicos_id );
        let servico = await Servico.findByPk( servico_id );

        if(!prestador_servicos){
            return response.status( 404 ).send( { erro : "Prestador de servicos não encontrado." } );
        }

        if(!servico){
            return response.status( 404 ).send( { erro : "Servico não encontrado." } );
        }

        let atendimento_servico = await AtendimentoServico.create({
            data_hora_inicio,
            data_hora_termino,
            servico_id,
            prestador_servicos_id
        });

        if( !atendimento_servico ){
            return response.status( 404 ).send( { erro : "Cadastro mal sucedido." } );
        };

        const atualizarStatusAtendimentoServico = await atendimento_servico.updateServico({
            em_atendimento: true,
        });

        if( !atualizarStatusAtendimentoServico ){
            return response.status( 404 ).send( { erro : "Atualização para em atendimento mal sucedida." } );
        };

        return response.status(201).send({
            atendimento_servico
        });
    },

    // async update( request, response ){
    //     // const { id } = request.params;

    //     // let sexo_cliente = await SexoCliente.findByPk( id, { raw : true } );

    //     // // Verifica se o sexo não foi encontrado
    //     // if( !sexo_cliente ){
    //     //     return response.status( 404 ).send( { erro : "Sexo não encontrado." } )
    //     // }

    //     // const {
    //     //     sexo
    //     // } = request.body;

    //     // let update = SexoCliente.update(
    //     //     {
    //     //         sexo
    //     //     },
    //     //     {
    //     //         where: {
    //     //             id : id
    //     //         },
    //     //     }
    //     // );

    //     // if(update){
    //     //     response.send( "Atualização bem sucedida." );
    //     // }
    //     // else{
    //     //     return response.status( 404 ).send( { erro : "Atualização mal sucedida, tente novamente." } )
    //     // }
    // },

    async delete( request, response ){
        // const { id } = request.params;

        // let sexo_cliente = await SexoCliente.findByPk( id, { raw : true } );

        // // Verifica se o cliente não foi encontrado
        // if( !sexo_cliente ){
        //     return response.status( 404 ).send( { erro : "Sexo não encontrado." } )
        // };

        // let deleta = SexoCliente.destroy({
        //     where: {
        //         id
        //     }
        // });

        // if(deleta){
        //     return response.status( 404 ).send( { erro : "Cliente excluído com sucesso." } )
        // }
        // else {
        //     return response.status( 404 ).send( { erro : "Falha na exclusão do cliente." } )
        // }
    }
}