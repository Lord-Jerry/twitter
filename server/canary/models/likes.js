module.exports = (sequelize, DataTypes) => {
  const likes = sequelize.define('like', {
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
    tweetId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: 'tweet',
        key: 'id',
      },
    },
    retweetId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: 'retweet',
        key: 'parentId',
      },
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
  likes.associate = function models(model) {
    likes.belongsTo(model.tweet, { foreignKey: 'tweetId', targetKey: 'id' });
    likes.belongsTo(model.retweet, { foreignKey: 'retweetId', targetKey: 'id' });
  };
  return likes;
};