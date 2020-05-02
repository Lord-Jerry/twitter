const router = require("express").Router();
const bodyParser = require('body-parser');
const { create } = require('../controllers/tweet');
// const { ValidateRegistration, validateLogin  } = require('../middlewares/validations/users');

// parse incoming request
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router
  .route('/create')
  .post(
    // ValidateRegistration,
    create
  );

module.exports = router;
