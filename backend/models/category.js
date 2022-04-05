'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    
    static associate(models) {
      // define association here
      Category.hasMany(models.Device, {
        foreignKey: 'Category_fk'
      })
    }
  }
  Category.init({
    Name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  return Category;
};