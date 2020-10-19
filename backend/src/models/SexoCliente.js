const { Model, DataTypes } = require("sequelize");

class SexoCliente extends Model {
    static init (sequelize){
        super.init(
            {
            sexo: DataTypes.STRING,
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