module.exports = (sequelize, DataTypes) => {
  const tweets = sequelize.define('tweet', {
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
    tweets.hasMany(model.like);
    tweets.hasMany(model.retweet);
  };
  return tweets;
};