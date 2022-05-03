'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Device', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Color: {
        allowNull: false,
        type: Sequelize.STRING(16), 

      },
      PartNumber: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: { isNumeric: true, notNull : true, }, 
      },
      Category_fk: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Category', key: 'id' }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Device');
  }
};