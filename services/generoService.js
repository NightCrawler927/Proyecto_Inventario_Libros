// src/services/generoService.js
const { Genero, Libro } = require('../models');

class GeneroService {
  async getAllGeneros() {
    try {
      return await Genero.findAll();
    } catch (error) {
      throw new Error(`Error al obtener los géneros: ${error.message}`);
    }
  }

  async getGeneroById(id) {
    try {
      const genero = await Genero.findByPk(id, {
        include: [{ model: Libro, as: 'libros' }]
      });

      if (!genero) {
        throw new Error('Género no encontrado');
      }

      return genero;
    } catch (error) {
      throw new Error(`Error al obtener el género: ${error.message}`);
    }
  }

  async createGenero(generoData) {
    try {
      return await Genero.create(generoData);
    } catch (error) {
      throw new Error(`Error al crear el género: ${error.message}`);
    }
  }

  async updateGenero(id, generoData) {
    try {
      const genero = await Genero.findByPk(id);

      if (!genero) {
        throw new Error('Género no encontrado');
      }

      await genero.update(generoData);
      return genero;
    } catch (error) {
      throw new Error(`Error al actualizar el género: ${error.message}`);
    }
  }

  async deleteGenero(id) {
    try {
      const genero = await Genero.findByPk(id);

      if (!genero) {
        throw new Error('Género no encontrado');
      }

      await genero.destroy();
      return { message: 'Género eliminado correctamente' };
    } catch (error) {
      throw new Error(`Error al eliminar el género: ${error.message}`);
    }
  }
}

module.exports = new GeneroService();
