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
        },
        {
            sequelize,
            tableName:"tbl_prestador_servicos"
        }
        );
    }

    static associate(models){
        this.belongsTo(models.SexoPrestadorServicos, {
            foreignKey: "id_sexo_prestador_servicos"
        });
        this.hasOne(models.LocalizacaoPrestadorServicos);
        this.hasOne(models.EnderecoPrestadorServicos);
        this.hasMany(models.Servico, {
            foreignKey: "resolvido_por"
        });
        this.hasMany(models.Mensagem);
    }
}

module.exports = PrestadorServicos;