'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('cards', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },

        title: {
          type: Sequelize.STRING,
          allowNull: false
        },

        description: {
          type: Sequelize.STRING,
          allowNull: true
        },

        checked: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        }

       });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
    
  }
};
