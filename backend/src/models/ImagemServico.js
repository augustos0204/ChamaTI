const { Model, DataTypes } = require("sequelize");

class ImagemServico extends Model {
    static init (sequelize){
        super.init(
            {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
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
        this.belongsTo(models.Servico, {
            foreignKey: "id_servico"
        });
    }
}

module.exports = ImagemServico;