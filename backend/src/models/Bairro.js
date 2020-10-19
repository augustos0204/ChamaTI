const { Model, DataTypes } = require("sequelize");

class Bairro extends Model {
    static init (sequelize){
        super.init(
            {
            id_bairro: DataTypes.INTEGER,
            nome_bairro: DataTypes.STRING,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        },
        {
            sequelize,
            tableName:"tbl_bairro"
        }
        );
    }

    static associate(models){
        this.hasMany(models.Endereco_Cliente);
        this.hasMany(models.Endereco_Prestador_Servicos);
    }
}

module.exports = Bairro;