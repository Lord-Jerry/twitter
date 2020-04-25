const { users } = require('../models');

class User {

  /**
   * create account
   * @param { object } req - request body
   * @param { object } res - api response
   * @param { function } next - next middleware function
   */
  static async create (req, res, next) {
    try {
      const { email, name } = req.body;


      return res.status(201).json({
        statusCode: 201,
        message: 'Account created successfully',
      });
    } catch (err) {
      return next(err);
    }
  }

  /**
   * create account
   * @param { object } req - request body
   * @param { object } res - api response
   * @param { function } next - next middleware function
   */
  static async login (req, res, next) {
    try {
      const { email, password } = req.body;


      return res.status(200).json({
        statusCode: 200,
        message: 'Logged in',
        data: {
          token: "fcngvmhb576r879t8",
        },
      });
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = User;
