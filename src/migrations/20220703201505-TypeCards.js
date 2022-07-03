'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('typeCards', { 
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true, 
      primaryKey: true
    },
    
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    cardName: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'cards',
        key: 'id'
      }
    }

  });
  
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.dropTable('users');

  }
};
