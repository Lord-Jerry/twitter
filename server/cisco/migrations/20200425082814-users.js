'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    name: {
      allowNull: true,
      type: Sequelize.STRING,
      unique: true,
    },
    email: {
      allowNull: true,
      type: Sequelize.STRING,
      unique: true,
    },
    mobile: {
      allowNull: true,
      type: Sequelize.STRING,
      unique: true,
    },
    username: {
      allowNull: true,
      type: Sequelize.STRING,
      unique: true,
    },
    displayName: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    countryId: {
      allowNull: true,
      type: Sequelize.INTEGER,
    },
    password: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW(),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW(),
    },
  }),
  
  down: (queryInterface, _Sequelize) => queryInterface.dropTable('users'),
};
