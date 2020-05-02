'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('retweet', {
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
    parentId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      unique: false,
      references: {
        model: 'tweet',
        key: 'id',
      },
    },
    comment: {
      allowNull: true,
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
  
  down: (queryInterface, _Sequelize) => queryInterface.dropTable('retweet'),
};
