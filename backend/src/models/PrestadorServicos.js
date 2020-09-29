const { Model, DataTypes } = require("sequelize");

class PrestadorServicos extends Model {
    static init (sequelize){
        super.init(
            {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            data_nascimento: DataTypes.DATEONLY,
            rg: DataTypes.STRING,
            cpf: DataTypes.STRING,
            telefone: DataTypes.STRING,
            foto: DataTypes.STRING,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
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
        this.hasMany(models.Servico);
        this.hasMany(models.Mensagem);
    }
}

module.exports = PrestadorServicos;