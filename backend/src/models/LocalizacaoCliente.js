const { Model, DataTypes } = require("sequelize");

class LocalizacaoCliente extends Model {
    static init (sequelize){
        super.init(
            {
            latitude: DataTypes.STRING,
            longitude: DataTypes.STRING,
            data_hora: DataTypes.DATE,
        },
        {
            sequelize,
            tableName:"tbl_localizacao_cliente"
        }
        );
    }

    static associate(models){
        this.belongsTo(models.Cliente, {
            foreignKey: "id_cliente"
        });
    }
}

module.exports = LocalizacaoCliente;