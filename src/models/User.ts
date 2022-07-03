import db from ".";
import TodoList from "./TodoList";


const { DataTypes, Model } = require('sequelize');


class User extends Model {
  public id: number;
  public email: string;
  public password: string;
  public todoListName: number;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  todoListName: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
}, {
  sequelize: db, 
  modelName: 'users'
});

User.belongsTo(TodoList, { foreignKey: 'todoListName', as: 'todoList' });

TodoList.hasMany(User, { foreignKey: 'todoListName', as: 'todoList' });

export default User;