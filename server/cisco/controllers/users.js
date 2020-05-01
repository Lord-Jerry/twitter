const bcrypt = require('bcryptjs');
const { users } = require('../models');
const { encode } = require('../helpers/token');

class User {

  /**
   * create account
   * @param { object } req - request body
   * @param { object } res - api response
   * @param { function } next - next middleware function
   */
  static async create (req, res, next) {
    try {
      const {  name , email, username, password, } = req.body;

      const checkEmailExists = await users.findOne({
        where: {
          email,
        }
      });

      if (checkEmailExists) {
        const err = new Error(); 
        err.message = `user with email ${email} already exists`;
        err.statusCode = 400; 
        return next(err);
      }

      const checkUsernameExisits = await users.findOne({
        where: {
          username
        },
      });

      if (checkUsernameExisits) {
        const err = new Error(); 
        err.message = `user with user ${username} already exists`;
        err.statusCode = 400; 
        return next(err);
      }

      const createUser = await users.create({
        name,
        email,
        username,
        password: bcrypt.hashSync(password, 10), 
      });

      createUser.password = undefined;

      const token = encode(createUser);


      return res.status(201).json({
        statusCode: 201,
        message: 'Account created successfully',
        data: {
          token,
        },
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

      const checkEmail = await users.findOne({
        where: {
          email,
        }
      });
      console.log(checkEmail);

      if (!checkEmail) {
        const err = new Error(); 
        err.message = 'Invalid Email Address or Password';
        err.statusCode = 401; 
        return next(err);
      }

      const checkPassword = await bcrypt.compare(password, checkEmail.password);

      if (!checkPassword) {
        const err = new Error();
        err.message = 'Invalid Email Address or Password';
        err.statusCode = 401;
        return next(err);
      }

      checkEmail.password = undefined;

      const token = encode(checkEmail);

      return res.status(200).json({
        statusCode: 200,
        message: 'Logged in',
        data: {
          token,
        },
      });
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = User;
