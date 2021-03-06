const bcrypt = require("bcryptjs");
const Cliente = require("../models/Cliente");

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
        let cliente_email = await Cliente.findOne(
            {
                 where: {
                    email : email
                 }
            }
        );

        if ( cliente_email ) { 
            return response.status( 400 ).send( { erro : "Email já cadastrado." } );
        }
        
        let cliente_cpf = await Cliente.findOne(
            {
                 where: {
                    cpf : cpf
                 }
            }
        )
        
        console.log(cliente_cpf);
        
        if ( cliente_cpf ) {
            return response.status( 400 ).send( { erro : "CPF já cadastrado." } );
        }

        let cliente_telefone = await Cliente.findOne(
            {
                 where: {
                    telefone : telefone
                 }
            }
        )
        
        if ( cliente_telefone ) {
            return response.status( 400 ).send( { erro : "Telefone já cadastrado." } );
        }

        const senhaCripto = await bcrypt.hash(senha, 10);

        let cliente;

        if( foto ){
            try {
                cliente = await Cliente.create({
                    nome, email, senha: senhaCripto, data_nascimento, cpf, telefone, foto, sexo_cliente_id : sexo_id
                });
            } catch (error) {
                return response.status( 400 ).send( { erro : `Erro ao cadastrar o cliente. Tente novamente. Erro: ${error}` } );
            }
        }
        else {
            try {
                cliente = await Cliente.create({
                    nome, email, senha: senhaCripto, data_nascimento, cpf, telefone, sexo_cliente_id : sexo_id
                });
            } catch (error) {
                return response.status( 400 ).send( { erro : `Erro ao cadastrar o cliente. Tente novamente. Erro: ${error}` } );
            }
        }

        let endereco_cliente;

        if(cliente){
            endereco_cliente = await cliente.createEnderecoCliente({
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
            return response.status( 400 ).send( { erro : "Erro ao cadastrar o cliente. Tente novamente." } )
        }

        if( !endereco_cliente ){
            return response.status( 400 ).send( { erro : "Erro ao cadastrar o endereco. Tente novamente." } )
        }

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

    //Terminar de implementar
    async update( request, response ){
        const { id } = request.params;

        let cliente = await Cliente.findByPk( id, { raw : true } );

        // Verifica se o cliente não foi encontrado
        if( !cliente ){
            return response.status( 404 ).send( { erro : "Cliente não encontrado." } )
        }

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

        const senhaCripto = await bcrypt.hash(senha, 10);

        let cliente_update;

        if( foto ){
            cliente_update = cliente.update({
                nome, email, senha: senhaCripto, data_nascimento, cpf, telefone, foto, sexo_cliente_id : sexo_id,
            });
        }
        else {
            cliente_update = cliente.update.update({
                nome, email, senha: senhaCripto, data_nascimento, cpf, telefone, sexo_cliente_id : sexo_id,
            });
        }

        // Apaga o campo senha da resposta para não mostrá-la a quem solicitou a busca
        delete cliente.senha;

        let endereco_cliente_update;

        if(cliente_update){
            endereco_cliente_update = await cliente.updateEnderecoCliente({
                cep,
                logradouro,
                bairro,
                cidade,
                estado,
                numero,
                complemento,
            });
        }
        else{
            return response.status( 404 ).send( { erro : "Atualização mal sucedida, tente novamente." } )
        }

        if(endereco_cliente_update){
            return response.status(201).send({
                cliente_update, endereco_cliente_update
                // token
            });
        }
    },

    //Terminar de implementar
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