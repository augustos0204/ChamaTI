const { Model, DataTypes } = require("sequelize");

class EnderecoPrestadorServicos extends Model {
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
            tableName:"tbl_endereco_prestador_servicos"
        }
        );
    }

    static associate(models){
        this.belongsTo(models.PrestadorServicos, {
            foreignKey: "id_prestador_servicos"
        });
    }
}

module.exports = EnderecoPrestadorServicos;