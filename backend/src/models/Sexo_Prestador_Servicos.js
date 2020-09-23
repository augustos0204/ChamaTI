const { Model, DataTypes } = require("sequelize");

class Sexo_Prestador_Servicos extends Model {
    static init (sequelize){
        super.init(
            {
            id_sexo_prestador_servicos: DataTypes.INTEGER,
            sexo: DataTypes.STRING,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        },
        {
            sequelize,
            tableName:"tbl_sexo_prestador_servicos"
        }
        );
    }

    static associate(models){
        this.hasMany(models.Prestador_Servicos);
    }
}

module.exports = Sexo_Prestador_Servicos;