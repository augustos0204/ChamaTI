const { Model, DataTypes } = require("sequelize");

class Servico extends Model {
    static init (sequelize){
        super.init(
            {
            id_servico: DataTypes.INTEGER,
            problema: DataTypes.STRING,
            descricao: DataTypes.TEXT,
            data_hora_abertura: DataTypes.DATE,
            data_hora_encerramento: DataTypes.DATE,
            em_aberto: DataTypes.BOOLEAN,
            resolvido_por: DataTypes.INTEGER,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        },
        {
            sequelize,
            tableName:"tbl_servico"
        }
        );
    }

    static associate(models){
        this.hasOne(models.Cliente, {
            foreignKey: "id_cliente"
        });
        this.hasOne(models.Prestador_Servicos, {
            foreignKey: "id_prestador_servicos"
        });
        this.hasMany(models.Imagem_Servico);
    }
}

module.exports = Servico;