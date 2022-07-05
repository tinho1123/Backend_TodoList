'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     this.belongsTo(models.TypeCard, {
      foreignKey: 'idTypeCard',
      as:'cardName'
    })
    }
  }
  Card.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    checked: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};