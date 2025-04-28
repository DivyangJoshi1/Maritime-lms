module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    }, {
      timestamps: true,  // Sequelize will handle createdAt and updatedAt
      tableName: 'companies',
      underscored: true,  // Ensures snake_case column names (e.g., created_at, updated_at)
    });
  
    return Company;
  };
  