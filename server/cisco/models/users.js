module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true,
    },
    mobile: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true,
    },
    username: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true,
    },
    displayName: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    countryId: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    password: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW(),
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW(),
    },
  });

  // eslint-disable-next-line no-unused-vars
  user.associate = function model(models) {

  };
  return user;
};