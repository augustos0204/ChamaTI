const { Model, DataTypes } = require("sequelize");

class Estado extends Model {
    static init (sequelize){
        super.init(
            {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            nome_estado: DataTypes.STRING,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        },
        {
            sequelize,
            tableName:"tbl_estado"
        }
        );
    }

    static associate(models){
        this.hasMany(models.EnderecoCliente);
        this.hasMany(models.EnderecoPrestadorServicos);
    }
}

module.exports = Estado;