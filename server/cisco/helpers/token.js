const jwt = require('jsonwebtoken');

/**
 * this class contains helper function for encoding and decoding auth tokens
 */
class Token {
  /**
   * encode token for users
   */
  static encode(...details) {
    return jwt.sign({
      ...details,
    }, process.env.SECRET_KEY, { expiresIn: '24h' });
  }

  /**
   * decode user token
   */
  static decode(req) {
    const { token } = req.headers;

    return jwt.verify(token, process.env.SECRET_KEY);
  }
}

module.exports = Token;