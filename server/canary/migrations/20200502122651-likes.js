'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('likes', {
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
    tweetId: {
      allowNull: true,
      type: Sequelize.INTEGER,
      unique: false,
      references: {
        model: 'tweets',
        key: 'id',
      },
    },
    retweetId: {
      allowNull: true,
      type: Sequelize.INTEGER,
      unique: false,
      references: {
        model: 'retweets',
        key: 'id',
      },
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
  
  down: (queryInterface, _Sequelize) => queryInterface.dropTable('likes'),
};
