'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tbl_mensagem", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      mensagem:  {
        type: Sequelize.STRING,
        allowNull: true
      },
      data_hora_envio:  {
        type: Sequelize.DATE,
        allowNull: false,
      },
      arquivo:  {
        type: Sequelize.STRING,
        allowNull: true
      },
      remetente:  {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      destinatario:  {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_cliente : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tbl_cliente",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      id_prestador_servicos : {
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
    return queryInterface.dropTable("tbl_prestador_servicos");
  }
};
