const { Model, DataTypes } = require("sequelize");

class CidadeCliente extends Model {
    static init (sequelize){
        super.init(
            {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            nome_cidade: DataTypes.STRING,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        },
        {
            sequelize,
            tableName:"tbl_cidade_cliente"
        }
        );
    }

    static associate(models){
        this.hasMany(models.EnderecoCliente);
    }
}

module.exports = CidadeCliente;