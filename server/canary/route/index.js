const router = require("express").Router();
const bodyParser = require('body-parser');
const { create, deleteTweet } = require('../controllers/tweet');
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

router
  .route('/delete/:tweetId')
  .delete(
    // ValidateRegistration,
    deleteTweet
  );

module.exports = router;
