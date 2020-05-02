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
}

module.exports = Tweet;
