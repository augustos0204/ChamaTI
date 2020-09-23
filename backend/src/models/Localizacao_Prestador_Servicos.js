const { Model, DataTypes } = require("sequelize");

class Localizacao_Prestador_Servicos extends Model {
    static init (sequelize){
        super.init(
            {
            id_localizacao_prestador_servicos: DataTypes.INTEGER,
            latitude: DataTypes.STRING,
            longitude: DataTypes.STRING,
            data_hora: DataTypes.DATE,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        },
        {
            sequelize,
            tableName:"tbl_localizacao_prestador_servicos"
        }
        );
    }

    static associate(models){
        this.hasOne(models.Prestador_Servicos, {
            foreignKey: "id_prestador_servicos"
        });
    }
}

module.exports = Localizacao_Prestador_Servicos;