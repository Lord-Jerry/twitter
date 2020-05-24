"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert("tweets", [
      {
        id: 20,
        userId: 1,
        tweet: "hello test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("tweets", null, {}),
};
