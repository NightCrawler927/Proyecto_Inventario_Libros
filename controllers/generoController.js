// src/controllers/generoController.js
const generoService = require('../services/generoService');

class GeneroController {
  async getAllGeneros(req, res) {
    try {
      const generos = await generoService.getAllGeneros();
      return res.status(200).json(generos);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getGeneroById(req, res) {
    try {
      const { id } = req.params;
      const genero = await generoService.getGeneroById(id);
      return res.status(200).json(genero);
    } catch (error) {
      if (error.message === 'Género no encontrado') {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  }

  async createGenero(req, res) {
    try {
      const nuevoGenero = await generoService.createGenero(req.body);
      return res.status(201).json(nuevoGenero);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async updateGenero(req, res) {
    try {
      const { id } = req.params;
      const generoActualizado = await generoService.updateGenero(id, req.body);
      return res.status(200).json(generoActualizado);
    } catch (error) {
      if (error.message === 'Género no encontrado') {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteGenero(req, res) {
    try {
      const { id } = req.params;
      const resultado = await generoService.deleteGenero(id);
      return res.status(200).json(resultado);
    } catch (error) {
      if (error.message === 'Género no encontrado') {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new GeneroController();
