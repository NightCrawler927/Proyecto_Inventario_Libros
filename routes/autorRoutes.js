// src/routes/autorRoutes.js
const express = require('express');
const autorController = require('../controllers/autorController');
const { validateAutorCreation, validateIdParam } = require('../middlewares/validations');

const router = express.Router();

/**
 * @swagger
 * /api/autores:
 *   get:
 *     summary: Obtiene todos los autores
 *     tags: [Autores]
 *     responses:
 *       200:
 *         description: Lista de autores
 */
router.get('/', autorController.getAllAutores);

/**
 * @swagger
 * /api/autores/{id}:
 *   get:
 *     summary: Obtiene un autor por su ID
 *     tags: [Autores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del autor
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Datos del autor
 *       404:
 *         description: Autor no encontrado
 */
router.get('/:id', validateIdParam, autorController.getAutorById);

/**
 * @swagger
 * /api/autores:
 *   post:
 *     summary: Crea un nuevo autor
 *     tags: [Autores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - nacionalidad
 *             properties:
 *               nombre:
 *                 type: string
 *               nacionalidad:
 *                 type: string
 *     responses:
 *       201:
 *         description: Autor creado
 *       400:
 *         description: Datos inválidos
 */
router.post('/', validateAutorCreation, autorController.createAutor);

/**
 * @swagger
 * /api/autores/{id}:
 *   put:
 *     summary: Actualiza un autor existente
 *     tags: [Autores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del autor
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
 *               nacionalidad:
 *                 type: string
 *     responses:
 *       200:
 *         description: Autor actualizado
 *       404:
 *         description: Autor no encontrado
 */
router.put('/:id', validateIdParam, validateAutorCreation, autorController.updateAutor);

/**
 * @swagger
 * /api/autores/{id}:
 *   delete:
 *     summary: Elimina un autor
 *     tags: [Autores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del autor
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Autor eliminado
 *       404:
 *         description: Autor no encontrado
 */
router.delete('/:id', validateIdParam, autorController.deleteAutor);

module.exports = router;
