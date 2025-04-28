// src/models/Course.js
module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('Course', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      category: {
        type: DataTypes.STRING,
      },
      duration: {
        type: DataTypes.STRING,
      },
      company_id: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'active',
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'updated_at',
      },
    }, {
      tableName: 'courses',
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    });
  
    return Course;
  };
  