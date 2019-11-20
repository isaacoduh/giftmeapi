'use strict';
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    listId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recipientName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recipientEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gifts: {
      type: DataTypes.JSON,
      allowNull: false
    }
  }, {});
  List.associate = function (models) {
    // associations can be defined here
    List.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return List;
};