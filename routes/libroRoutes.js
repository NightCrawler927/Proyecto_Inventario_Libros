// src/routes/libroRoutes.js
const express = require('express');
const libroController = require('../controllers/libroController');
const { validateLibroCreation, validateIdParam, validateIdParamGenero, validateIdParamAutor } = require('../middlewares/validations');

const router = express.Router();

/**
 * @swagger
 * /api/libros:
 *   get:
 *     summary: Obtiene todos los libros
 *     tags: [Libros]
 *     responses:
 *       200:
 *         description: Lista de libros
 */
router.get('/', libroController.getAllLibros);

/**
 * @swagger
 * /api/libros/{id}:
 *   get:
 *     summary: Obtiene un libro por su ID
 *     tags: [Libros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del libro
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Datos del libro
 *       404:
 *         description: Libro no encontrado
 */
router.get('/:id', validateIdParam, libroController.getLibroById);

/**
 * @swagger
 * /api/libros:
 *   post:
 *     summary: Crea un nuevo libro
 *     tags: [Libros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - titulo
 *               - precio
 *               - stock
 *               - autorId
 *               - generoId
 *             properties:
 *               titulo:
 *                 type: string
 *               precio:
 *                 type: number
 *               stock:
 *                 type: integer
 *               autorId:
 *                 type: integer
 *               generoId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Libro creado
 *       400:
 *         description: Datos inválidos
 */
router.post('/', validateLibroCreation, libroController.createLibro);

/**
 * @swagger
 * /api/libros/{id}:
 *   put:
 *     summary: Actualiza un libro existente
 *     tags: [Libros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del libro
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               precio:
 *                 type: number
 *               stock:
 *                 type: integer
 *               autorId:
 *                 type: integer
 *               generoId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Libro actualizado
 *       404:
 *         description: Libro no encontrado
 */
router.put('/:id', validateIdParam, libroController.updateLibro);

/**
 * @swagger
 * /api/libros/{id}:
 *   delete:
 *     summary: Elimina un libro
 *     tags: [Libros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del libro
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Libro eliminado
 *       404:
 *         description: Libro no encontrado
 */
router.delete('/:id', validateIdParam, libroController.deleteLibro);

/**
 * @swagger
 * /api/libros/autor/{autorId}:
 *   get:
 *     summary: Obtiene todos los libros de un autor específico
 *     tags: [Libros]
 *     parameters:
 *       - in: path
 *         name: autorId
 *         required: true
 *         description: ID del autor
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de libros del autor
 */
router.get('/autor/:autorId', validateIdParamAutor, libroController.getLibrosByAutor);

/**
 * @swagger
 * /api/libros/genero/{generoId}:
 *   get:
 *     summary: Obtiene todos los libros de un género específico
 *     tags: [Libros]
 *     parameters:
 *       - in: path
 *         name: generoId
 *         required: true
 *         description: ID del género
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de libros del género
 */
router.get('/genero/:generoId', validateIdParamGenero, libroController.getLibrosByGenero);

module.exports = router;
