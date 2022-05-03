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
      });
    }
  }
  Category.init({
    Name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Essse campo não pode ser nulo!" ,
        },
        len: {
          args: [1, 128],
          msg: "Essse campo deve ter entre 1 e 128 caracteres!" ,
        },
      }
    }
  },
   {
    sequelize,
    modelName: 'Category',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false, 
  });
  return Category;
};