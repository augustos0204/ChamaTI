const { Model, DataTypes } = require("sequelize");

class Cidade extends Model {
    static init (sequelize){
        super.init(
            {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            nome_cidade: DataTypes.STRING,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        },
        {
            sequelize,
            tableName:"tbl_cidade"
        }
        );
    }

    static associate(models){
        this.hasMany(models.EnderecoCliente);
        this.hasMany(models.EnderecoPrestadorServicos);
    }
}

module.exports = Cidade;