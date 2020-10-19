const { Model, DataTypes } = require("sequelize");

class Sexo_Cliente extends Model {
    static init (sequelize){
        super.init(
            {
            id_sexo_cliente: DataTypes.INTEGER,
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

module.exports = Sexo_Cliente;