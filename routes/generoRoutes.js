// src/routes/generoRoutes.js
const express = require('express');
const generoController = require('../controllers/generoController');
const { validateGeneroCreation, validateIdParam } = require('../middlewares/validations');

const router = express.Router();

/**
 * @swagger
 * /api/generos:
 *   get:
 *     summary: Obtiene todos los géneros
 *     tags: [Géneros]
 *     responses:
 *       200:
 *         description: Lista de géneros
 */
router.get('/', generoController.getAllGeneros);

/**
 * @swagger
 * /api/generos/{id}:
 *   get:
 *     summary: Obtiene un género por su ID
 *     tags: [Géneros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del género
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Datos del género
 *       404:
 *         description: Género no encontrado
 */
router.get('/:id', validateIdParam, generoController.getGeneroById);

/**
 * @swagger
 * /api/generos:
 *   post:
 *     summary: Crea un nuevo género
 *     tags: [Géneros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Género creado
 *       400:
 *         description: Datos inválidos
 */
router.post('/', validateGeneroCreation, generoController.createGenero);

/**
 * @swagger
 * /api/generos/{id}:
 *   put:
 *     summary: Actualiza un género existente
 *     tags: [Géneros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del género
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Género actualizado
 *       404:
 *         description: Género no encontrado
 */
router.put('/:id', validateIdParam, validateGeneroCreation, generoController.updateGenero);

/**
 * @swagger
 * /api/generos/{id}:
 *   delete:
 *     summary: Elimina un género
 *     tags: [Géneros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del género
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Género eliminado
 *       404:
 *         description: Género no encontrado
 */
router.delete('/:id', validateIdParam, generoController.deleteGenero);

module.exports = router;
