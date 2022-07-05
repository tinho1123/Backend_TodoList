'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TodoList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     this.belongsTo(models.User, {
      onDelete: 'CASCADE', 
      foreignKey: 'idUser',
      as: 'todoListName'
    })

    this.hasMany(models.TypeCard, {
      foreignKey: {
        name: 'idTodoList',
        key: 'id',
        as: 'typeCardName'
      }
    })
    }
  }
  TodoList.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

  },   {
    sequelize,
    modelName: 'TodoList',
  });
  return TodoList;
};