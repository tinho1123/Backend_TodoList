import db from ".";
import TypeCard from "./TypeCard";
const { DataTypes, Model } = require('sequelize');

class TodoList extends Model {
    public id: number;
    public typeCardName: number;
    public title: string
}

TodoList.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      }, 

      typeCardName: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      }

}, {
  sequelize: db,
  modelName: 'todoLists',
});

TodoList.belongsTo(TypeCard, { foreignKey: 'typeCardName', as: 'typeCard' });

TodoList.hasMany(TypeCard, { foreignKey: 'typeCardName', as: 'typeCard' });


export default TodoList;