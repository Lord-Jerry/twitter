module.exports = (sequelize, DataTypes) => {
  const like = sequelize.define('like', {
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
  like.associate = function models(model) {
    like.belongsTo(model.tweet, { foreignKey: 'tweetId', targetKey: 'id' });
    like.belongsTo(model.retweet, { foreignKey: 'retweetId', targetKey: 'id' });
  };
  return like;
};