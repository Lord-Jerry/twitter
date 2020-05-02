const router = require("express").Router();
const bodyParser = require('body-parser');
const { create, deleteTweet } = require('../controllers/tweet');
const { ValidateCreate, validateDelete  } = require('../middlewares/validations/tweet');

// parse incoming request
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router
  .route('/create')
  .post(
    ValidateCreate,
    create
  );

router
  .route('/delete/:tweetId')
  .delete(
    validateDelete,
    deleteTweet
  );

module.exports = router;
