const { Model, DataTypes } = require("sequelize");

class Mensagem extends Model {
    static init (sequelize){
        super.init(
            {
            id_mensagem: DataTypes.INTEGER,
            mensagem: DataTypes.STRING,
            data_hora_envio: DataTypes.DATE,
            arquivo: DataTypes.STRING,
            remetente: DataTypes.INTEGER,
            destinatario: DataTypes.INTEGER,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        },
        {
            sequelize,
            tableName:"tbl_servico"
        }
        );
    }

    static associate(models){
        this.hasOne(models.Cliente, {
            foreignKey: "id_cliente"
        });
        this.hasOne(models.Prestador_Servicos, {
            foreignKey: "id_prestador_servicos"
        });
    }
}

module.exports = Mensagem;