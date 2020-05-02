const jwt = require('jsonwebtoken');

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

      const decoded = jwt.verify(token, process.env.SECRET_KEY);

      if (!decoded) {
        const err = new Error();
        err.message = 'invalid token';
        err.statusCode = 401;
        return next(err);
      }

      req.headers.decoded_token = decoded;
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
