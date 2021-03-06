const jwt = require('jsonwebtoken');
const { decode } = require('../helpers/token')

class Auth {

  static checkLoggedIn(req, res, next) {
    try {
      const { token } = req.headers;

      if (token === undefined || token === null || token === '') {
        const err = new Error();
        err.message = 'token does not exist';
        err.statusCode = 401;
        return next(err);
      }

      const decoded = decode(req);
      if (!decoded) {
        const err = new Error();
        err.message = 'invalid token';
        err.statusCode = 401;
        return next(err);
      }

      req.headers.decoded_token = JSON.stringify(decoded[0]);
      return next();
    } catch (e) {
      const err = new Error();
      err.message = 'invalid token';
      err.statusCode = 401;
      return next(err);
    }

  }
}

module.exports = Auth;
