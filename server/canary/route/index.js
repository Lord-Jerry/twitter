const router = require("express").Router();
const bodyParser = require('body-parser');
const { create, deleteTweet, retweet, getSingleTweet } = require('../controllers/tweet');
const { ValidateCreate, validateParams } = require('../middlewares/validations/tweet');

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
  .route('/create/:tweetId')
  .post(
    validateParams,
    ValidateCreate,
    create
  );

router
  .route('/delete/:tweetId')
  .delete(
    validateParams,
    deleteTweet
  );

router
  .route('/retweet/:tweetId')
  .post(
    validateParams,
    retweet
  );

router
  .route('/:tweetId')
  .get(
    validateParams,
    getSingleTweet,
  );

module.exports = router;
