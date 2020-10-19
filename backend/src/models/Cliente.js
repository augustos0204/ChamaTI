const { Model, DataTypes } = require("sequelize");

class Cliente extends Model {
    static init(sequelize) {
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
                tableName: "tbl_cliente"
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.SexoCliente, {
            foreignKey: "sexo_cliente_id"
        });
        this.hasOne(models.LocalizacaoCliente);
        this.hasOne(models.EnderecoCliente);
        this.hasMany(models.Servico);
        this.hasMany(models.Mensagem);
    }
}

module.exports = Cliente;