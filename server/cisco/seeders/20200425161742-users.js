"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "users",
      [
        {
          email: "test@gmail.com",
          username: "test",
          name: "test",
          password: "test",
          createdAt: new Date(), 
          updatedAt: new Date()
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("users", null, {}),
};
