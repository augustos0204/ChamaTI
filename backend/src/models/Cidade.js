const { Model, DataTypes } = require("sequelize");

class Cidade extends Model {
    static init (sequelize){
        super.init(
            {
            id_cidade: DataTypes.INTEGER,
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
        this.hasMany(models.Endereco_Cliente);
        this.hasMany(models.Endereco_Prestador_Servicos);
    }
}

module.exports = Cidade;