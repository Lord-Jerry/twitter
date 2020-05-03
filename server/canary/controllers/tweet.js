const { tweet, retweet } = require("../models/index");
class Tweet {
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

  static async retweet(req, res, next) {
    try {
      const decoded_token = JSON.parse(req.headers.decoded_token);
      const { tweetId } = req.params;
      let { comment } = req.body;
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

      // TODO: get likes and retweet count for retweet
      // TODO: get data for retweet with comment
      return res.status(201).json({
        message: "retweeted successfully",
        statusCode: 201,
        data: {
          todo: true,
        },
      });
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = Tweet;
