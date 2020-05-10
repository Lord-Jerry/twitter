const { Op } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const tweets = sequelize.define("tweet", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: false,
    },
    tweet: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: false,
    },
    parentId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      unique: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW(),
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW(),
    },
  });

  // eslint-disable-next-line no-unused-vars
  tweets.associate = function models(model) {
    tweets.hasMany(model.like, { as: "Likes", foreignKey: "tweetId" });
    tweets.hasMany(model.retweet, { as: "Retweets", foreignKey: "parentId" });

    // TODO: figure out a way to make this work.
    // tweets.countAction =  function count(tweetId) {
    //   return tweets.findOne({
    //     where: {
    //       id: tweetId,
    //     },
    //     group: ["tweet.id"],
    //     attributes: [
    //       [sequelize.fn("COUNT", "Likes"), "likeCount"],
    //       [sequelize.fn("COUNT", "Retweets"), "retweetCount"],
    //     ],
    //     include: [
    //       {
    //         model: model.like,
    //         as: "Likes",
    //         required: true,
    //         where: {
    //           "$Likes.tweetId$": { [Op.eq]: tweetId },
    //         },
    //         attributes: [],
    //       },
    //       {
    //         model: model.retweet,
    //         as: "Retweets",
    //         where: {
    //           "$Retweets.comment$": { [Op.is]: null },
    //         },
    //         attributes: [],
    //       },
    //     ],
    //   });
    // TODO: make use of the above
    tweets.countAction = function count(tweetId) {
      const getLikeCount = model.like.count({
        where: {
          tweetId,
        },
      });

      const getRetweetCount = model.retweet.count({
        where: {
          comment: null,
        },
      });

      return Promise.all([getLikeCount, getRetweetCount]);
    };
  };
  return tweets;
};
