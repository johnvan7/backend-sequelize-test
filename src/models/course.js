'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.belongsTo(models.Instructor, {
        foreignKey: 'instructorId',
        as: 'instructor',
      });

      Course.belongsToMany(models.Student, {
        through: models.Enrollment,
        foreignKey: 'courseId',
        as: 'students',
      });
    }
  }
  Course.init({
    courseId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};
