module.exports = (sequelize, DataTypes) => {
  const tweet = sequelize.define('tweet', {
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
  tweet.associate = function models(model) {
    tweet.hasMany(model.like);
    tweet.hasMany(model.retweet);
  };
  return tweet;
};