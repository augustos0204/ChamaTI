const { Model, DataTypes } = require("sequelize");

class BairroPrestadorServicos extends Model {
    static init (sequelize){
        super.init(
            {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            nome_bairro: DataTypes.STRING,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        },
        {
            sequelize,
            tableName:"tbl_bairro_prestador_servicos"
        }
        );
    }

    static associate(models){
        this.hasMany(models.EnderecoPrestadorServicos);
    }
}

module.exports = BairroPrestadorServicos;