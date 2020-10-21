const { Model, DataTypes } = require("sequelize");

class PrestadorServicos extends Model {
    static init (sequelize){
        super.init(
            {
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            data_nascimento: DataTypes.DATEONLY,
            cpf: DataTypes.STRING,
            telefone: DataTypes.STRING,
            foto: DataTypes.STRING,
            sexo_prestador_servicos_id: DataTypes.INTEGER
        },
        {
            sequelize,
            tableName:"tbl_prestador_servicos"
        }
        );
    }

    static associate(models){
        // console.log(models)
        this.belongsTo(models.SexoPrestadorServicos, {
            foreignKey: "sexo_prestador_servicos_id"
        });
        // this.hasOne(models.LocalizacaoPrestadorServicos);
        this.hasOne(models.EnderecoPrestadorServicos, {
            foreignKey: "prestador_servicos_id"
        });
        this.belongsToMany(models.Servico,
            { through: models.AtendimentoServico, foreignKey: "prestador_servicos_id" },
        );
        // this.belongsToMany(models.Servico,
        //     { through: "tbl_atendimento_servico" }
        // );
        this.hasMany(models.Mensagem);
    }
}

module.exports = PrestadorServicos;