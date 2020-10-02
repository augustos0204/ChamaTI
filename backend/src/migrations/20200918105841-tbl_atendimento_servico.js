'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tbl_atendimento_servico", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      data_hora_inicio:  {
        type: Sequelize.DATE,
        allowNull: false
      },
      data_hora_termino: {
        type: Sequelize.DATE,
        allowNull: true
      },
      servico_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "tbl_servico",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
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
    return queryInterface.dropTable("tbl_atendimento_servico");
  }
};
