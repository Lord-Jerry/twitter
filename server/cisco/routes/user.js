const router = require("express").Router();
const bodyParser = require('body-parser');
const { getSingleUser } = require('../controllers/users');
const { validateParams } = require('../middlewares/validations/users');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router
  .route('/:userId')
  .get(
    validateParams,
    getSingleUser
  );

module.exports = router;
