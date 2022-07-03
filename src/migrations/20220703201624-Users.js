'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      password: {
        type: Sequelize.STRING,
        allowNull: false
      },

      todoListName: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'todoLists',
          key: 'id'
        }
      }
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');

  }
};
