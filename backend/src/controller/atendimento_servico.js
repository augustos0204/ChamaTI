const PrestadorServicos = require("../models/PrestadorServicos");
const AtendimentoServico = require("../models/AtendimentoServico");
const Servico = require("../models/Servico");
const { compareSync } = require("bcryptjs");

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

    async searchEmAtendimento( request, response ){
        console.log("=== Search em atendimento ===");

        const prestador_servicos_id = request.user_id;

        const atendimentos_servicos = await Servico.findAll({
            attributes: [
                "id",
                "problema",
                "descricao",
                "em_aberto",
                "em_atendimento",
                "ClienteId"
            ],
            include: [{
                attributes: [
                    "id",
                    "nome",
                    "email",
                    "foto",
                ],
                model: PrestadorServicos,
                where: {
                    id : prestador_servicos_id,
                },
                through:{
                    attributes: [
                        "id",
                        "data_hora_inicio",
                    ],
                    model: AtendimentoServico,
                    order: [[ 'data_hora_inicio', 'DESC' ]]
                }
            }],                
            where:{
                em_aberto: true,
                em_atendimento: true,
            },
        });

        if( !atendimentos_servicos ){
            return response.status( 404 ).send( { erro : "Atendimentos não encontrados." } )
        }

        return response.send( atendimentos_servicos );
    },

    async store(request, response){
        const prestador_servicos_id = request.user_id;

        const {
            data_hora_inicio,
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
            servico_id,
            prestador_servicos_id
        });

        if( !atendimento_servico ){
            return response.status( 404 ).send( { erro : "Cadastro mal sucedido." } );
        };

        servico.em_atendimento = true;
        const atualizarStatusAtendimentoServico =  await servico.save();

        if( !atualizarStatusAtendimentoServico ){
            return response.status( 404 ).send( { erro : "Atualização para em atendimento mal sucedida." } );
        };

        return response.status(201).send({
            atendimento_servico
        });
    },

    async finalizarAtendimento( request, response ){
        const prestador_servicos_id = request.user_id;

        const {
            data_hora_termino,
            atendimento_servico_id,
        } = request.body;

        let prestador_servicos = await PrestadorServicos.findByPk( prestador_servicos_id );
        let atendimento_servico = await AtendimentoServico.findByPk( atendimento_servico_id );
        let servico = await Servico.findByPk( atendimento_servico.servico_id );

        if(!prestador_servicos){
            return response.status( 404 ).send( { erro : "Prestador de servicos não encontrado." } );
        }

        if(!servico){
            return response.status( 404 ).send( { erro : "Servico não encontrado." } );
        }

        if(!atendimento_servico){
            return response.status( 404 ).send( { erro : "Atendimento de servico não encontrado." } );
        }

        atendimento_servico = await atendimento_servico.save({
            data_hora_termino,
        });

        if( !atendimento_servico ){
            return response.status( 404 ).send( { erro : "Atualização de atendimento mal sucedida." } );
        };

        servico.data_hora_encerramento = data_hora_termino
        servico.em_aberto = false;
        servico.em_atendimento = false;
        servico.resolvido_por = prestador_servicos_id;
        const atualizarStatusAtendimentoServico =  await servico.save();

        if( !atualizarStatusAtendimentoServico ){
            return response.status( 404 ).send( { erro : "Atualização de status do serviço para atendido mal sucedida." } );
        };

        return response.status(201).send({
            atendimento_servico,
            servico
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

    // async delete( request, response ){
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
    // }
}