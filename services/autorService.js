// src/services/autorService.js
const { Autor, Libro } = require('../models');

class AutorService {
  async getAllAutores() {
    try {
      return await Autor.findAll();
    } catch (error) {
      throw new Error(`Error al obtener los autores: ${error.message}`);
    }
  }

  async getAutorById(id) {
    try {
      const autor = await Autor.findByPk(id, {
        include: [{ model: Libro, as: 'libros' }]
      });

      if (!autor) {
        throw new Error('Autor no encontrado');
      }

      return autor;
    } catch (error) {
      throw new Error(`Error al obtener el autor: ${error.message}`);
    }
  }

  async createAutor(autorData) {
    try {
      return await Autor.create(autorData);
    } catch (error) {
      throw new Error(`Error al crear el autor: ${error.message}`);
    }
  }

  async updateAutor(id, autorData) {
    try {
      const autor = await Autor.findByPk(id);

      if (!autor) {
        throw new Error('Autor no encontrado');
      }

      await autor.update(autorData);
      return autor;
    } catch (error) {
      throw new Error(`Error al actualizar el autor: ${error.message}`);
    }
  }

  async deleteAutor(id) {
    try {
      const autor = await Autor.findByPk(id);

      if (!autor) {
        throw new Error('Autor no encontrado');
      }

      await autor.destroy();
      return { message: 'Autor eliminado correctamente' };
    } catch (error) {
      throw new Error(`Error al eliminar el autor: ${error.message}`);
    }
  }
}

module.exports = new AutorService();
