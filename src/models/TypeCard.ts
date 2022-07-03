import db from ".";
import Card from "./Card";
const { DataTypes, Model } = require('sequelize');

class TypeCard extends Model {
  public id: number;
  public typeCardName: number;
  public title: string;
}

TypeCard.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      }, 

      cardName: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      }

}, {
  sequelize: db,
  modelName: 'typeCards',
});

TypeCard.belongsTo(Card, { foreignKey: 'cardName', as: 'card' });

Card.hasMany(TypeCard, { foreignKey: 'cardName', as: 'card' });

export default TypeCard;