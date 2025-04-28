const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'Divy@ngSDE1',
  database: 'maritimelms',
  logging: false,
});

// Import models
const defineCourse = require('./Course');
const defineUserCourse = require('./UserCourses');
const defineCompany = require('./company'); // ✅ Import Company model

// Define models
const Course = defineCourse(sequelize, DataTypes);
const UserCourse = defineUserCourse(sequelize, DataTypes);
const Company = defineCompany(sequelize, DataTypes); // ✅ Define Company

// Associations
Course.hasMany(UserCourse, { foreignKey: 'courseId' });
UserCourse.belongsTo(Course, { foreignKey: 'courseId' });

// Export
module.exports = {
  sequelize,
  Sequelize,
  Course,
  UserCourse,
  Company, // ✅ Export Company
};
