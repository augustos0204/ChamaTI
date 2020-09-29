'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tbl_endereco_prestador_servicos", {
      id: {
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
      bairro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      complemento:  {
        type: Sequelize.STRING,
        allowNull: true
      },
      prestador_servicos_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tbl_prestador_servicos",
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
    return queryInterface.dropTable("tbl_endereco_prestador_servicos");
  }
};
