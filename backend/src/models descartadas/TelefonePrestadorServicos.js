const { Model, DataTypes } = require("sequelize");

class TelefonePrestadorServicos extends Model {
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
            tableName:"tbl_telefone_prestador_servicos"
        }
        );
    }

    static associate(models){
        this.hasOne(models.PrestadorServicos, {
            foreignKey: "id_prestador_servicos"
        });
    }
}

module.exports = TelefonePrestadorServicos;