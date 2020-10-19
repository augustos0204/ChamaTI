const Servico = require("../models/Servico");
const Cliente = require("../models/Cliente");

module.exports = {
    async list( request, response ) {
        const servicos = await Servico.findAll();

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

    async store(request, response){
        let authorization = request.headers.authorization;

        const [ Bearer, token ] = authorization.split(" ");

        const {
            problema,
            descricao,
            data_hora_abertura,
            data_hora_encerramento,
            em_aberto,
            em_atendimento,
            resolvido_por,
        } = request.body;

        let cliente = await Cliente.findByPk( token );

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