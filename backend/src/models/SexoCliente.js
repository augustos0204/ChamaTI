const { Model, DataTypes } = require("sequelize");

class SexoCliente extends Model {
    static init (sequelize){
        super.init(
            {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            sexo: DataTypes.STRING,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        },
        {
            sequelize,
            tableName:"tbl_sexo_cliente"
        }
        );
    }

    static associate(models){
        this.hasMany(models.Cliente);
    }
}

module.exports = SexoCliente;