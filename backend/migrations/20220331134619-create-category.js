'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Category', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        allowNull: false,
        type: Sequelize.STRING(125)
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Category');
  }
};