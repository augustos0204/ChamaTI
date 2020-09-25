const { Model, DataTypes } = require("sequelize");

class Imagem_Servico extends Model {
    static init (sequelize){
        super.init(
            {
            id_imagem_servico: DataTypes.INTEGER,
            imagem: DataTypes.STRING,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        },
        {
            sequelize,
            tableName:"tbl_imagem_servico"
        }
        );
    }

    static associate(models){
        this.hasOne(models.Servico, {
            foreignKey: "id_servico"
        });
    }
}

module.exports = Imagem_Servico;