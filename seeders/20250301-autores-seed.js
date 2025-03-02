'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Autors', [
      {
        nombre: 'Miguel de Cervantes',
        nacionalidad: 'Española',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'J.R.R. Tolkien',
        nacionalidad: 'Británica',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Gabriel García Márquez',
        nacionalidad: 'Colombiana',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'George Orwell',
        nacionalidad: 'Británica',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Antoine de Saint-Exupéry',
        nacionalidad: 'Francesa',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Autors', null, {});
  }
};
