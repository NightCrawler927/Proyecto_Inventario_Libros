// src/controllers/autorController.js
const autorService = require('../services/autorService');

class AutorController {
  async getAllAutores(req, res) {
    try {
      const autores = await autorService.getAllAutores();
      return res.status(200).json(autores);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getAutorById(req, res) {
    try {
      const { id } = req.params;
      const autor = await autorService.getAutorById(id);
      return res.status(200).json(autor);
    } catch (error) {
      if (error.message === 'Autor no encontrado') {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  }

  async createAutor(req, res) {
    try {
      const nuevoAutor = await autorService.createAutor(req.body);
      return res.status(201).json(nuevoAutor);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async updateAutor(req, res) {
    try {
      const { id } = req.params;
      const autorActualizado = await autorService.updateAutor(id, req.body);
      return res.status(200).json(autorActualizado);
    } catch (error) {
      if (error.message === 'Autor no encontrado') {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteAutor(req, res) {
    try {
      const { id } = req.params;
      const resultado = await autorService.deleteAutor(id);
      return res.status(200).json(resultado);
    } catch (error) {
      if (error.message === 'Autor no encontrado') {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new AutorController();
