'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tbl_cliente", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome:  {
        type: Sequelize.STRING,
        allowNull: false
      },
      email:  {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      senha:  {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      foto: {
        type: Sequelize.STRING,
        allowNull: true
      },
      sexo_cliente_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tbl_sexo_cliente",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tbl_cliente");
  }
};
