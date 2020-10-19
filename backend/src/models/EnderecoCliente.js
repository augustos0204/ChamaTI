const { Model, DataTypes } = require("sequelize");

class EnderecoCliente extends Model {
    static init (sequelize){
        super.init(
            {
            cep: DataTypes.STRING,
            logradouro: DataTypes.STRING,
            bairro: DataTypes.STRING,
            cidade: DataTypes.STRING,
            estado: DataTypes.STRING,
            numero: DataTypes.INTEGER,
            complemento: DataTypes.STRING,
        },
        {
            sequelize,
            tableName:"tbl_endereco_cliente"
        }
        );
    }

    static associate(models){
        this.belongsTo(models.Cliente, {
            foreignKey: "id_cliente"
        });
    }
}

module.exports = EnderecoCliente;