"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Todos", "userId", {
      type: Sequelize.INTEGER,
      after: "id",
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
      // automatically update & delete todos when a user is updated or deleted.
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Todos", "userId");
  },
};
