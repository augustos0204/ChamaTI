const EnderecoCliente = require("../models/EnderecoCliente");

module.exports = {
    async list( request, response ) {
        const enderecos = await EnderecoCliente.findAll();

        response.send( enderecos );
    },

    async searchById( request, response ){
        const { id } = request.params;

        let endereco = await EnderecoCliente.findByPk( id, { raw : true } );

        // Verifica se o sexo não foi encontrado
        if( !endereco ){
            return response.status( 404 ).send( { erro : "Endereço não encontrado." } )
        }

        // Retorna o sexo encontrado
        response.send( endereco );
    },

    // Inserções
    async store(request, response){
        const {
            cep,
            logradouro,
            bairro,
            cidade,
            estado,
            numero,
            complemento,
        } = request.body;

        let endereco_cliente = await EnderecoCliente.create({
            cep,
            logradouro,
            bairro,
            cidade,
            estado,
            numero,
            complemento,
        });

        return response.status(201).send({
            endereco_cliente
        });
    },

    async update( request, response ){
        // const { id } = request.params;

        // let sexo_cliente = await SexoCliente.findByPk( id, { raw : true } );

        // // Verifica se o sexo não foi encontrado
        // if( !sexo_cliente ){
        //     return response.status( 404 ).send( { erro : "Sexo não encontrado." } )
        // }

        // const {
        //     sexo
        // } = request.body;

        // let update = SexoCliente.update(
        //     {
        //         sexo
        //     },
        //     {
        //         where: {
        //             id : id
        //         },
        //     }
        // );

        // if(update){
        //     response.send( "Atualização bem sucedida." );
        // }
        // else{
        //     return response.status( 404 ).send( { erro : "Atualização mal sucedida, tente novamente." } )
        // }
    },

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