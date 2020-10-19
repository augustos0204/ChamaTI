const { Model, DataTypes } = require("sequelize");

class Telefone_Cliente extends Model {
    static init (sequelize){
        super.init(
            {
            id_telefone_cliente: DataTypes.INTEGER,
            numero_telefone: DataTypes.STRING,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        },
        {
            sequelize,
            tableName:"tbl_telefone_cliente"
        }
        );
    }

    static associate(models){
        this.hasOne(models.Cliente, {
            foreignKey: "id_cliente"
        });
    }
}

module.exports = Telefone_Cliente;