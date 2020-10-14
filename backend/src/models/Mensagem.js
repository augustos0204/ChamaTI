const { Model, DataTypes } = require("sequelize");

class Mensagem extends Model {
    static init (sequelize){
        super.init(
            {
            mensagem: DataTypes.STRING,
            data_hora_envio: DataTypes.DATE,
            arquivo: DataTypes.STRING,
            remetente: DataTypes.INTEGER,
            destinatario: DataTypes.INTEGER,
        },
        {
            sequelize,
            tableName:"tbl_servico"
        }
        );
    }

    static associate(models){
        this.belongsTo(models.Cliente, {
            foreignKey: "id_cliente"
        });
        this.belongsTo(models.PrestadorServicos, {
            foreignKey: "id_prestador_servicos"
        });
    }
}

module.exports = Mensagem;