const Validator = require('validatorjs');

const ValidateRegistration = async (req, _res, next) => {
  const rules = {
    email: 'required|email',
    username: 'required',
    name: 'required',
    password: 'required',
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
const validateLogin = async (req, _res, next) => {
  const rules = {
    email: 'required|email',
    password: 'required',
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


module.exports = { ValidateRegistration, validateLogin }; 
