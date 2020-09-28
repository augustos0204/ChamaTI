const { Model, DataTypes } = require("sequelize");

class LocalizacaoPrestadorServicos extends Model {
    static init (sequelize){
        super.init(
            {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
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
        this.hasOne(models.PrestadorServicos, {
            foreignKey: "id_prestador_servicos"
        });
    }
}

module.exports = LocalizacaoPrestadorServicos;