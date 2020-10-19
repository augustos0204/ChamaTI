const { Model, DataTypes } = require("sequelize");

class LocalizacaoPrestadorServicos extends Model {
    static init (sequelize){
        super.init(
            {
            latitude: DataTypes.STRING,
            longitude: DataTypes.STRING,
            data_hora: DataTypes.DATE,
        },
        {
            sequelize,
            tableName:"tbl_localizacao_prestador_servicos"
        }
        );
    }

    static associate(models){
        // this.belongsTo(models.PrestadorServicos, {
        //     foreignKey: "prestador_servicos_id"
        // });
    }
}

module.exports = LocalizacaoPrestadorServicos;