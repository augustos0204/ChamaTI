const { Model, DataTypes } = require("sequelize");

class AtendimentoServico extends Model {
    static init (sequelize){
        super.init(
            {
            data_hora_inicio: DataTypes.DATE,
            data_hora_termino: DataTypes.DATE,
            servico_id: DataTypes.INTEGER,
            prestador_servicos_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            tableName:"tbl_atendimento_servico"
        }
        );
    }

    static associate(models){
        // this.hasOne(models.Servico, {
        //     foreignKey: "resolvido_por"
        // });
        // this.hasOne(models.PrestadorServicos, {
        //     foreignKey: "prestador_servicos_id"
        // });
    }
}

module.exports = AtendimentoServico;