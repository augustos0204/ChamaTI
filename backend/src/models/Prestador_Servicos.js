const { Model, DataTypes } = require("sequelize");

class Prestador_Servicos extends Model {
    static init (sequelize){
        super.init(
            {
            id_prestador_servicos: DataTypes.INTEGER,
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            data_nascimento: DataTypes.DATEONLY,
            rg: DataTypes.STRING,
            cpf: DataTypes.STRING,
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
        this.hasOne(models.Sexo_Prestador_Servicos, {
            foreignKey: "id_sexo_prestador_servicos"
        });
        this.hasMany(models.Telefone_Prestador_Servicos);
        this.hasOne(models.Localizacao_Prestador_Servicos);
        this.hasOne(models.Endereco_Prestador_Servicos);
    }
}

module.exports = Prestador_Servicos;