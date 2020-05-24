'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('tweets', {
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
      allowNull: true,
      type: Sequelize.STRING,
      unique: false,
    },
    // for retweet 
    tweetId: {
      allowNull: true,
      type: Sequelize.INTEGER,
      unique: false,
      references: {
        model: 'tweets',
        key: 'id',
      },
    },
    parentId: {
      allowNull: true,
      type: Sequelize.INTEGER,
      unique: false,
      references: {
        model: 'tweets',
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
  
  down: (queryInterface, _Sequelize) => queryInterface.dropTable('tweets'),
};
