"use strict";
const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Todos", "detail", {
      type: DataTypes.STRING,
      after: "status",
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn("Todos", "detail");
  },
};
