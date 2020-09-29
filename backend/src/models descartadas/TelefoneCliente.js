const { Model, DataTypes } = require("sequelize");

class TelefoneCliente extends Model {
    static init (sequelize){
        super.init(
            {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
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
        this.belongsTo(models.Cliente, {
            foreignKey: "id_cliente"
        });
    }
}

module.exports = TelefoneCliente;