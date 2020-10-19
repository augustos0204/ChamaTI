const { Model, DataTypes } = require("sequelize");

class Estado extends Model {
    static init (sequelize){
        super.init(
            {
            id_estado: DataTypes.INTEGER,
            nome_estado: DataTypes.STRING,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        },
        {
            sequelize,
            tableName:"tbl_estado"
        }
        );
    }

    static associate(models){
        this.hasMany(models.Endereco_Cliente);
        this.hasMany(models.Endereco_Prestador_Servicos);
    }
}

module.exports = Estado;