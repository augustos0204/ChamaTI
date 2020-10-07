const { Model, DataTypes } = require("sequelize");

class Mensagem extends Model {
    static init (sequelize){
        super.init(
            {
            data_hora_inicio: DataTypes.DATE,
            data_hora_termino: DataTypes.DATE,
            servico_id: DataTypes.INTEGER,
            prestador_servicos_id: DataTypes.INTEGER,
            destinatario: DataTypes.INTEGER,
        },
        {
            sequelize,
            tableName:"tbl_servico"
        }
        );
    }

    static associate(models){
        this.hasOne(models.Servico, {
            foreignKey: "servico_id"
        });
        this.hasOne(models.PrestadorServicos, {
            foreignKey: "prestador_servicos_id"
        });
    }
}

module.exports = Mensagem;