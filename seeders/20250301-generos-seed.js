'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Generos', [
      {
        nombre: 'Clásico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Fantasía',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Realismo Mágico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Distopía',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Infantil',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Generos', null, {});
  }
};
