const { tweet } = require('../models/index');
class Tweet {
  static async create(req, res, next) {
    try {
      const decoded_token = JSON.parse(req.headers.decoded_token);
      const tweetBody = req.body.tweet;
      const createdTweet = await tweet.create({
        userId: decoded_token.id,
        tweet: tweetBody,
      });

      return res.status(201).json({
        message: 'Tweet created',
        statusCode: 201, 
        data: {
          createdTweet,
        },
      });
      
    } catch(err) {
      return next(err)
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
        message: 'tweet deleted succesfully',
        statusCode: 204,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Tweet;
