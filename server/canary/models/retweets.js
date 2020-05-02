module.exports = (sequelize, DataTypes) => {
  const retweets = sequelize.define('retweet', {
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
    parentId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: 'tweet',
        key: 'id',
      },
    },
    comment: {
      allowNull: true,
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
  retweets.associate = function models(model) {
    retweets.hasMany(model.like);
    retweets.belongsTo(model.tweet, { foreignKey: 'parentId', targetKey: 'id' });
  };
  return retweets;
};