const Validator = require('validatorjs');

const ValidateCreate = async (req, _res, next) => {
  const rules = {
    tweet: 'required',
  };
  const validate = new Validator(req.body, rules);

  if (!validate.passes()) {
    const err = new Error();
    err.message = validate.errors;
    err.statusCode = 400;
    return next(err);
  }

  return next();
};
const validateDelete = async (req, _res, next) => {
  const rules = {
    tweetId: 'required|numeric',
  };
  const validate = new Validator(req.params, rules);

  if (!validate.passes()) {
    const err = new Error();
    err.message = validate.errors;
    err.statusCode = 400;
    return next(err);
  }

  return next();
};


module.exports = { ValidateCreate, validateDelete }; 
