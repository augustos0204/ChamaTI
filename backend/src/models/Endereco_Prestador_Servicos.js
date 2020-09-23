const { Model, DataTypes } = require("sequelize");

class Endereco_Prestador_Servicos extends Model {
    static init (sequelize){
        super.init(
            {
            id_endereco_prestador_servicos: DataTypes.INTEGER,
            cep: DataTypes.STRING,
            logradouro: DataTypes.STRING,
            numero: DataTypes.INTEGER,
            complemento: DataTypes.STRING,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        },
        {
            sequelize,
            tableName:"tbl_endereco_prestador_servicos"
        }
        );
    }

    static associate(models){
        this.hasOne(models.Bairro, {
            foreignKey: "id_bairro"
        });
        this.hasOne(models.Cidade, {
            foreignKey: "id_cidade"
        });
        this.hasOne(models.Estado, {
            foreignKey: "id_estado"
        });
        this.hasOne(models.Prestador_Servicos, {
            foreignKey: "id_prestador_servicos"
        });
    }
}

module.exports = Endereco_Prestador_Servicos;