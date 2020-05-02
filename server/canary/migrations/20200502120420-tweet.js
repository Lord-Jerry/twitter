'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('tweet', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      unique: false,
    },
    tweet: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: false,
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
  
  down: (queryInterface, _Sequelize) => queryInterface.dropTable('tweet'),
};
