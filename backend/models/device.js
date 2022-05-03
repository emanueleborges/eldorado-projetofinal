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
      });
    }
  }
  Device.init({
    Color: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Essse campo não pode ser nulo!" ,
        },
        len: {
          args: [1, 16],
          msg: "Essse campo deve ter entre 1 e 16 caracteres!" ,
        },
      }
    },
    PartNumber: {
      type: DataTypes.INTEGER,
      validate: {
       
        notEmpty: {
          msg: "Essse campo não pode ser nulo!" ,
        },
        len: {
          args: [1, 16],
          msg: "Essse campo deve ter entre 1 e 16 caracteres!" ,
        },
        min: 1,
      }
    } 
  }, 
  {
    sequelize,
    modelName: 'Device',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  return Device;
};