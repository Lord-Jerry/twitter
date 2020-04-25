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
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("users", null, {}),
};
