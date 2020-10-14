const { Model, DataTypes } = require("sequelize");

class Servico extends Model {
    static init(sequelize) {
        super.init(
            {
                problema: DataTypes.STRING,
                descricao: DataTypes.TEXT,
                data_hora_abertura: DataTypes.DATE,
                data_hora_encerramento: DataTypes.DATE,
                em_aberto: DataTypes.BOOLEAN,
                em_atendimento: DataTypes.BOOLEAN,
                resolvido_por: DataTypes.INTEGER,
            },
            {
                sequelize,
                tableName: "tbl_servico"
            }
        );
    }

    static associate(models) {
        // console.log(models)
        this.belongsTo(models.Cliente);
        // this.hasMany(models.PrestadorServicos, {
        //     foreignKey: "resolvido_por"
        // });
        this.belongsToMany(models.PrestadorServicos,
            { through: models.AtendimentoServico }
        );
        // this.belongsToMany(models.PrestadorServicos,
        //     { through: "tbl_atendimento_servico" }
        // );
        this.hasMany(models.ImagemServico);
    }
}

module.exports = Servico;