const { Model, DataTypes } = require("sequelize");

class Cliente extends Model {
    static init(sequelize) {
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
                foto: DataTypes.STRING,
                created_at: DataTypes.DATE,
                updated_at: DataTypes.DATE,
            },
            {
                sequelize,
                tableName: "tbl_cliente"
            }
        );
    }

    static associate(models) {
        this.hasOne(models.SexoCliente, {
            foreignKey: "id_sexo_cliente"
        });
        this.hasMany(models.TelefoneCliente);
        this.hasOne(models.LocalizacaoCliente);
        this.hasOne(models.EnderecoCliente);
        this.hasMany(models.Servico);
        this.hasMany(models.Mensagem);
    }
}

module.exports = Cliente;