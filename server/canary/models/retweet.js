module.exports = (sequelize, DataTypes) => {
  const retweet = sequelize.define('retweet', {
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
      type: Sequelize.INTEGER,
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
  retweet.associate = function model(models) {
    retweet.hasMany(model.like);
    retweet.belongsTo(model.tweet, { foreignKey: 'parentId', targetKey: 'id' });
  };
  return retweet;
};