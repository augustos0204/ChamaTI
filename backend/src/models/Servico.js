const { Model, DataTypes } = require("sequelize");

class Servico extends Model {
    static init (sequelize){
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
            tableName:"tbl_servico"
        }
        );
    }

    static associate(models){
        this.belongsTo(models.Cliente);
        this.hasOne(models.PrestadorServicos, {
            foreignKey: "id_prestador_servicos"
        });
        // this.belongsToMany(models.PrestadorServicos);
        this.hasMany(models.ImagemServico);
    }
}

module.exports = Servico;