const { Model, DataTypes } = require("sequelize");

class Telefone_Prestador_Servicos extends Model {
    static init (sequelize){
        super.init(
            {
            id_telefone_prestador_servicos: DataTypes.INTEGER,
            numero_telefone: DataTypes.STRING,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        },
        {
            sequelize,
            tableName:"tbl_telefone_prestador_servicos"
        }
        );
    }

    static associate(models){
        this.hasOne(models.Prestador_Servicos, {
            foreignKey: "id_prestador_servicos"
        });
    }
}

module.exports = Telefone_Prestador_Servicos;