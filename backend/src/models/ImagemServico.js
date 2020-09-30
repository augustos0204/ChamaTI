const { Model, DataTypes } = require("sequelize");

class ImagemServico extends Model {
    static init (sequelize){
        super.init(
            {
            imagem: DataTypes.STRING,
        },
        {
            sequelize,
            tableName:"tbl_imagem_servico"
        }
        );
    }

    static associate(models){
        this.belongsTo(models.Servico, {
            foreignKey: "id_servico"
        });
    }
}

module.exports = ImagemServico;