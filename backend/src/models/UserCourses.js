module.exports = (sequelize, DataTypes) => {
  const UserCourse = sequelize.define(
    'UserCourse',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.STRING(24),
        allowNull: false,
        field: 'user_id', // maps to DB column
      },
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'course_id',
      },
      progress: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      assignedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'assigned_at',
      },
    },
    {
      tableName: 'user_courses',
      timestamps: false,   // ✅ no createdAt, updatedAt
    }
  );

  return UserCourse;
};
