const { Model, DataTypes } = require("sequelize");

class Cliente extends Model {
    static init (sequelize){
        super.init(
            {
            id_cliente: DataTypes.INTEGER,
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
            tableName:"tbl_cliente"
        }
        );
    }

    static associate(models){
        this.hasOne(models.Sexo_Prestador_Servicos, {
            foreignKey: "id_sexo_prestador_servicos"
        });
        this.hasMany(models.Telefone_Cliente);
        this.hasOne(models.Localizacao_Cliente);
        this.hasOne(models.Endereco_Cliente);
    }
}

module.exports = Cliente;