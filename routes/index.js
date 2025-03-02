// src/routes/index.js
const express = require('express');
const autorRoutes = require('./autorRoutes');
const generoRoutes = require('./generoRoutes');
const libroRoutes = require('./libroRoutes');

const router = express.Router();

router.use('/autores', autorRoutes);
router.use('/generos', generoRoutes);
router.use('/libros', libroRoutes);

module.exports = router;
