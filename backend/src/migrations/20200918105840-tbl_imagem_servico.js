'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tbl_imagem_servico", {
      id_imagem_servico: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      imagem:  {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_servico : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tbl_servico",
          key: "id_servico"
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
    return queryInterface.dropTable("tbl_imagem_servico");
  }
};
