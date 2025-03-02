// src/controllers/libroController.js
const libroService = require('../services/libroService');

class LibroController {
  async getAllLibros(req, res) {
    try {
      const libros = await libroService.getAllLibros();
      return res.status(200).json(libros);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getLibroById(req, res) {
    try {
      const { id } = req.params;
      const libro = await libroService.getLibroById(id);
      return res.status(200).json(libro);
    } catch (error) {
      if (error.message === 'Libro no encontrado') {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  }

  async createLibro(req, res) {
    try {
      const nuevoLibro = await libroService.createLibro(req.body);
      return res.status(201).json(nuevoLibro);
    } catch (error) {
      if (error.message.includes('no existe')) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  }

  async updateLibro(req, res) {
    try {
      const { id } = req.params;
      const libroActualizado = await libroService.updateLibro(id, req.body);
      return res.status(200).json(libroActualizado);
    } catch (error) {
      if (error.message === 'Libro no encontrado') {
        return res.status(404).json({ error: error.message });
      }
      if (error.message.includes('no existe')) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteLibro(req, res) {
    try {
      const { id } = req.params;
      const resultado = await libroService.deleteLibro(id);
      return res.status(200).json(resultado);
    } catch (error) {
      if (error.message === 'Libro no encontrado') {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  }

  async getLibrosByAutor(req, res) {
    try {
      const { autorId } = req.params;
      const libros = await libroService.getLibrosByAutor(autorId);
      return res.status(200).json(libros);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getLibrosByGenero(req, res) {
    try {
      const { generoId } = req.params;
      const libros = await libroService.getLibrosByGenero(generoId);
      return res.status(200).json(libros);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new LibroController();
