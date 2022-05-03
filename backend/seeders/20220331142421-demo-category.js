'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('category', [{
      name: 'TI'
    }], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('category', null, {});

  }
};
