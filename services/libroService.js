// src/services/libroService.js
const { Libro, Autor, Genero } = require('../models');

class LibroService {
  async getAllLibros() {
    try {
      return await Libro.findAll({
        include: [
          { model: Autor, as: 'autor' },
          { model: Genero, as: 'genero' }
        ]
      });
    } catch (error) {
      throw new Error(`Error al obtener los libros: ${error.message}`);
    }
  }

  async getLibroById(id) {
    try {
      const libro = await Libro.findByPk(id, {
        include: [
          { model: Autor, as: 'autor' },
          { model: Genero, as: 'genero' }
        ]
      });

      if (!libro) {
        throw new Error('Libro no encontrado');
      }

      return libro;
    } catch (error) {
      throw new Error(`Error al obtener el libro: ${error.message}`);
    }
  }

  async createLibro(libroData) {
    try {
      // Verificar que exista el autor
      const autor = await Autor.findByPk(libroData.autorId);
      if (!autor) {
        throw new Error('El autor especificado no existe');
      }

      // Verificar que exista el género
      const genero = await Genero.findByPk(libroData.generoId);
      if (!genero) {
        throw new Error('El género especificado no existe');
      }

      return await Libro.create(libroData);
    } catch (error) {
      throw new Error(`Error al crear el libro: ${error.message}`);
    }
  }

  async updateLibro(id, libroData) {
    try {
      const libro = await Libro.findByPk(id);

      if (!libro) {
        throw new Error('Libro no encontrado');
      }

      // Si se está actualizando el autor, verificar que exista
      if (libroData.autorId) {
        const autor = await Autor.findByPk(libroData.autorId);
        if (!autor) {
          throw new Error('El autor especificado no existe');
        }
      }

      // Si se está actualizando el género, verificar que exista
      if (libroData.generoId) {
        const genero = await Genero.findByPk(libroData.generoId);
        if (!genero) {
          throw new Error('El género especificado no existe');
        }
      }

      await libro.update(libroData);
      return libro;
    } catch (error) {
      throw new Error(`Error al actualizar el libro: ${error.message}`);
    }
  }

  async deleteLibro(id) {
    try {
      const libro = await Libro.findByPk(id);

      if (!libro) {
        throw new Error('Libro no encontrado');
      }

      await libro.destroy();
      return { message: 'Libro eliminado correctamente' };
    } catch (error) {
      throw new Error(`Error al eliminar el libro: ${error.message}`);
    }
  }

  async getLibrosByAutor(autorId) {
    try {
      return await Libro.findAll({
        where: { autorId },
        include: [
          { model: Autor, as: 'autor' },
          { model: Genero, as: 'genero' }
        ]
      });
    } catch (error) {
      throw new Error(`Error al obtener los libros por autor: ${error.message}`);
    }
  }

  async getLibrosByGenero(generoId) {
    try {
      return await Libro.findAll({
        where: { generoId },
        include: [
          { model: Autor, as: 'autor' },
          { model: Genero, as: 'genero' }
        ]
      });
    } catch (error) {
      throw new Error(`Error al obtener los libros por género: ${error.message}`);
    }
  }
}

module.exports = new LibroService();
