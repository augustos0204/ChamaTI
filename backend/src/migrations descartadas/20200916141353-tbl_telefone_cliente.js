'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tbl_telefone_cliente", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      numero_telefone:  {
        type: Sequelize.STRING,
        allowNull: false
      },
      cliente_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tbl_cliente",
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
    return queryInterface.dropTable("tbl_telefone_cliente");
  }
};
