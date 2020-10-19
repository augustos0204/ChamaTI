'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tbl_endereco_cliente", {
      id_endereco_cliente: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      cep:  {
        type: Sequelize.STRING,
        allowNull: false
      },
      logradouro:  {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero:  {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_bairro : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tbl_bairro",
          key: "id_bairro"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      id_cidade : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tbl_cidade",
          key: "id_cidade"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      id_estado : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tbl_estado",
          key: "id_estado"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      complemento:  {
        type: Sequelize.STRING,
        allowNull: true
      },
      id_cliente : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tbl_cliente",
          key: "id_cliente"
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
    return queryInterface.dropTable("tbl_endereco_cliente");
  }
};
