const { Op } = require("sequelize");

const SexoPrestadorServicos = require("../models/SexoPrestadorServicos");

module.exports = {
    // Listar todos os sexos
    async list( request, response ) {
        const sexos = await SexoPrestadorServicos.findAll();

        response.send( sexos );
    },

    // Buscar sexo pelo ID
    async searchById( request, response ){
        const { id } = request.params;

        let sexo = await SexoPrestadorServicos.findByPk( id, { raw : true } );

        // Verifica se o sexo não foi encontrado
        if( !sexo ){
            return response.status( 404 ).send( { erro : "Sexo não encontrado." } )
        }

        // Retorna o sexo encontrado
        return response.send( sexo );
    },

    // Inserções
    async store(request, response){
        const {
            sexo,
        } = request.body;

        // Verificar se o sexo já existe
        //      select * from clientes where rg = ? or email = ? or cpf = ?
        let sexo_prestador_servicos = await SexoPrestadorServicos.findOne(
            {
                 where: {
                    [ Op.or ] : [
                        { sexo : sexo },
                    ]
                 }
            }
        );

        if ( sexo_prestador_servicos ) { 
            return response.status( 400 ).send( { erro : "Sexo já cadastrado." } )
        }

        sexo_prestador_servicos = await SexoPrestadorServicos.create({
            sexo
        });

        response.status(201).send({
            sexo_prestador_servicos
        });
    },

    async update( request, response ){
        const { id } = request.params;

        let sexo_prestador_servicos = await SexoPrestadorServicos.findByPk( id, { raw : true } );

        // Verifica se o sexo não foi encontrado
        if( !sexo_prestador_servicos ){
            return response.status( 404 ).send( { erro : "Sexo não encontrado." } )
        }

        const {
            sexo
        } = request.body;

        let update = SexoPrestadorServicos.update(
            {
                sexo
            },
            {
                where: {
                    id : id
                },
            }
        );

        if(update){
            response.send( "Atualização bem sucedida." );
        }
        else{
            return response.status( 404 ).send( { erro : "Atualização mal sucedida, tente novamente." } )
        }
    },

    async delete( request, response ){
        const { id } = request.params;

        let sexo_prestador_servicos = await SexoPrestadorServicos.findByPk( id, { raw : true } );

        // Verifica se o cliente não foi encontrado
        if( !sexo_prestador_servicos ){
            return response.status( 404 ).send( { erro : "Sexo não encontrado." } )
        };

        let deleta = SexoPrestadorServicos.destroy({
            where: {
                id
            }
        });

        if(deleta){
            return response.status( 404 ).send( { erro : "Cliente excluído com sucesso." } )
        }
        else {
            return response.status( 404 ).send( { erro : "Falha na exclusão do cliente." } )
        }
    }
}