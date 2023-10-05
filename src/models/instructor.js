'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instructor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Instructor.hasMany(models.Course, {
        foreignKey: 'instructorId',
        as: 'courses',
      });
    }
  }
  Instructor.init({
    instructorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
        unique: true,
    }
  }, {
    sequelize,
    modelName: 'Instructor',
  });
  return Instructor;
};
