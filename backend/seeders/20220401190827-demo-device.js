'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Device', [{
      Color: 'Black',
      PartNumber: 123456,
      Category_fk: 1
    }], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Device', null, {});
  }
};
