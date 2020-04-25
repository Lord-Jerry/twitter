const router = require("express").Router();
const { create, login } = require('../controllers/users');
const { register } = require('../middlewares/validations/users');

router
  .route('/register')
  .post(
    register,
    create
  );

router
  .route('/login')
  .post(
    register,
    login
  );

module.exports = router;
