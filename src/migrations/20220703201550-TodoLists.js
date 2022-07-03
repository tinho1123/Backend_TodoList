'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('todoLists', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        }, 

        typeCardName: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'typeCards',
            key: 'id'
            }
        },

        title: {
          type: Sequelize.STRING,
          allowNull: false,
        }

      });

  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('users');

  }
};
