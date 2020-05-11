const { get } = require('../utils/axios');
const { tweet, retweet, like } = require("../models/index");
// TODO: move url to env file
const CiscoBaseUrl = process.env.CISCO;
class Tweet {
  /**
   * this method, handles creating tweet, an replying to a tweeet.
   *
   * @param {object } req - request object
   * @param { obbjet } res - response object
   * @param { function } next - next middleware function
   */
  static async create(req, res, next) {
    try {
      const decoded_token = JSON.parse(req.headers.decoded_token);
      const tweetBody = req.body.tweet;
      const { tweetId } = req.params;

      if (tweetId) {
        const findTweet = await tweet.findByPk(tweetId);

        if (!findTweet) {
          const err = new Error();
          err.message = `Tweet with ID ${tweetId} not found`;
          err.statusCode = 404;
          return next(err);
        }
      }

      const createdTweet = await tweet.create({
        userId: decoded_token.id,
        tweet: tweetBody,
        parentId: tweetId || null,
      });

      return res.status(201).json({
        message: "Tweet created",
        statusCode: 201,
        data: {
          createdTweet,
        },
      });
    } catch (err) {
      return next(err);
    }
  }

  /**
   * this method, handles deleting tweets
   *
   * @param {object } req - request object
   * @param { obbjet } res - response object
   * @param { function } next - next middleware function
   */
  static async deleteTweet(req, res, next) {
    try {
      const decoded_token = JSON.parse(req.headers.decoded_token);
      const { tweetId } = req.params;

      const findTweet = await tweet.findOne({
        where: {
          userId: decoded_token.id,
          id: tweetId,
        },
      });

      if (!findTweet) {
        const err = new Error();
        err.message = `Tweet with ID ${tweetId} not found`;
        err.statusCode = 404;
        return next(err);
      }

      await findTweet.destroy();

      return res.status(204).json({
        message: "tweet deleted succesfully",
        statusCode: 204,
      });
    } catch (err) {
      next(err);
    }
  }

  /**
   * this method, handles retweets and retweets with comment.
   *
   * @param {object } req - request object
   * @param { obbjet } res - response object
   * @param { function } next - next middleware function
   */
  static async retweet(req, res, next) {
    try {
      const decoded_token = JSON.parse(req.headers.decoded_token);
      const { tweetId } = req.params;
      let { comment } = req.body;
      // trim out whitespace, so whe can confirm if comment body is empty. 
      comment = comment ? comment.trim() : null;

      const findTweet = await tweet.findByPk(tweetId);

      if (!findTweet) {
        const err = new Error();
        err.message = `tweet with ID ${tweetId} not found`;
        err.statusCode = 404;
        return next(err);
      }

      await retweet.create({
        userId: decoded_token.id,
        parentId: findTweet.id,
        comment: comment || null,
      });

      const [ likeCount, retweetCount ] = await tweet.countAction(tweetId);

      return res.status(201).json({
        message: "retweeted successfully",
        statusCode: 201,
        data: {
         likeCount,
         retweetCount,
        },
      });
    } catch (err) {
      return next(err);
    }
  }

  static async getSingleTweet(req, res, next) {
    try {
      const { tweetId } = req.params;
      const findTweet = await tweet.findByPk(tweetId);

      if (!findTweet) {
        const err = new Error();
        err.message = `tweet with ID ${tweetId} not found`;
        err.statusCode = 404;
        return next(err);
      }
      const endpoint = process.env.NODE_ENV !== 'test'
       ? `${CiscoBaseUrl}/user/${findTweet.userId}`
       : `${CiscoBaseUrl}.singleUser.json`;

       console.log(endpoint);

      const userDetails = await get(endpoint);

      return res.status(200).json({
        message: "tweet",
        statusCode: 200,
        data: {
         tweeet: findTweet,
         user: userDetails?.data?.data,
        },
      });
    } catch (err) {
      if (err?.response?.status === 404) {
        const e = new Error();
        e.message = 'tweet not found';
        e.statusCode = 404;
        return next(e);
      }
      return next(err);
    }
  }
}

module.exports = Tweet;
