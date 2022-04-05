'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
   
    static associate(models) {
      // define association here
      Device.belongsTo(models.Category, {
        foreignKey: 'Category_fk'
      })
    }
  }
  Device.init({
    Color: DataTypes.STRING,
    PartNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Device',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  return Device;
};