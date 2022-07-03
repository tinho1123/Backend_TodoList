import db from ".";
const { DataTypes, Model } = require('sequelize');

class Card extends Model {
    public id: number;
    public title: string;
    public description:string;
    public checked:boolean;

}

Card.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false
      },

      description: {
        type: DataTypes.STRING,
        allowNull: true
      },

      checked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }


}, {
  sequelize: db,
  modelName: 'cards',
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instÃĒncias de modelo
  * */

// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Example.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Card;