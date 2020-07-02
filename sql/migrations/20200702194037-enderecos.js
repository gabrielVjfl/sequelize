'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('enderecos', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
         allowNull: false,
         references: {
           model: 'users',
           key: 'id'
         },
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE' // RESTRICT --nao deixa deletar se tem endreço
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rua: {
        type: Sequelize.STRING,
        allowNull: false
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
     
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.dropTable('enderecos');
     
  }
};
