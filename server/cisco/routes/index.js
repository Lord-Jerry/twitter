const router = require("express").Router();
const { create, login } = require('../controllers/users');
const { ValidateRegistration, validateLogin  } = require('../middlewares/validations/users');

router
  .route('/register')
  .post(
    ValidateRegistration,
    create
  );

router
  .route('/login')
  .post(
    validateLogin,
    login
  );

module.exports = router;
