'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     this.hasMany(models.Card, { 
      onDelete: 'CASCADE',
      foreignKey: 'idTypeCard',
      as: 'cardName'
    })

     this.belongsTo(models.TodoList, {
      onDelete: 'CASCADE',
      foreignKey: 'idTodoList',
      as: 'typeCardName'
    })
    }
  }
  TypeCard.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'TypeCard',
  });
  return TypeCard;
};