'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Obtenemos los IDs de los autores y géneros insertados
    const autores = await queryInterface.sequelize.query(
      `SELECT id, nombre FROM "Autors";`
    );
    const generos = await queryInterface.sequelize.query(
      `SELECT id, nombre FROM "Generos";`
    );

    // Extraemos los resultados de las consultas
    const autoresRows = autores[0];
    const generosRows = generos[0];

    // Función para encontrar el ID de un autor por su nombre
    const getAutorId = (nombre) => {
      const autor = autoresRows.find(a => a.nombre.includes(nombre));
      return autor ? autor.id : null;
    };

    // Función para encontrar el ID de un género por su nombre
    const getGeneroId = (nombre) => {
      const genero = generosRows.find(g => g.nombre === nombre);
      return genero ? genero.id : null;
    };

    await queryInterface.bulkInsert('Libros', [
      {
        titulo: 'Don Quijote de la Mancha',
        precio: 30.00,
        stock: 60,
        autorId: getAutorId('Miguel de Cervantes'),
        generoId: getGeneroId('Clásico'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'El Señor de los Anillos',
        precio: 35.50,
        stock: 80,
        autorId: getAutorId('J.R.R. Tolkien'),
        generoId: getGeneroId('Fantasía'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Crónica de una muerte anunciada',
        precio: 18.00,
        stock: 40,
        autorId: getAutorId('Gabriel García Márquez'),
        generoId: getGeneroId('Realismo Mágico'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: '1984',
        precio: 20.75,
        stock: 35,
        autorId: getAutorId('George Orwell'),
        generoId: getGeneroId('Distopía'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'El Principito',
        precio: 15.99,
        stock: 90,
        autorId: getAutorId('Antoine de Saint-Exupéry'),
        generoId: getGeneroId('Infantil'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Libros', null, {});
  }
};
