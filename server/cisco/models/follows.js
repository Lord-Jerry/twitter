module.exports = (sequelize, DataTypes) => {
  const follow = sequelize.define('follows', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    followingId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
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
  follow.associate = function models(model) {
    follow.belongsTo(model.users, { foreignKey: 'userId', targetKey: 'id' });
    follow.belongsTo(model.users, { foreignKey: 'followingId', targetKey: 'id' });
  };
  return follow;
};