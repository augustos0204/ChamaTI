const { Model, DataTypes } = require("sequelize");

class BairroCliente extends Model {
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
            tableName:"tbl_bairro_cliente"
        }
        );
    }

    static associate(models){
        this.hasMany(models.EnderecoCliente);
    }
}

module.exports = BairroCliente;