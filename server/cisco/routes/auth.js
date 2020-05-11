const router = require("express").Router();
const bodyParser = require('body-parser');
const { create, login } = require('../controllers/users');
const { ValidateRegistration, validateLogin  } = require('../middlewares/validations/users');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

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
