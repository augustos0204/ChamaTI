tableName:"tbl_sexo_cliente";

const { Model, DataTypes } = require("sequelize");

class Sexo_Cliente extends Model {
    static init (sequelize){
        super.init(
            {
            ra: DataTypes.STRING,
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
        },
        {
            sequelize,
            tableName:"tblAluno"
        }
        );
    }

    static associate(models){
        this.hasMany(models.Postagem, {foreignKey: "created_aluno_id" });
        this.hasMany(models.Comentario);
    }
}

module.exports = Sexo_Cliente;