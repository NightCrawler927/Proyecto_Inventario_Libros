// src/middlewares/validations.js
const { body, param, validationResult } = require('express-validator');

// Función para manejar errores de validación
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Validaciones para Autor
const validateAutorCreation = [
  body('nombre')
    .notEmpty().withMessage('El nombre es obligatorio')
    .isString().withMessage('El nombre debe ser una cadena de texto'),
  body('nacionalidad')
    .notEmpty().withMessage('La nacionalidad es obligatoria')
    .isString().withMessage('La nacionalidad debe ser una cadena de texto'),
  handleValidationErrors
];

// Validaciones para Género
const validateGeneroCreation = [
  body('nombre')
    .notEmpty().withMessage('El nombre es obligatorio')
    .isString().withMessage('El nombre debe ser una cadena de texto'),
  handleValidationErrors
];

// Validaciones para Libro
const validateLibroCreation = [
  body('titulo')
    .notEmpty().withMessage('El título es obligatorio')
    .isString().withMessage('El título debe ser una cadena de texto'),
  body('precio')
    .notEmpty().withMessage('El precio es obligatorio')
    .isNumeric().withMessage('El precio debe ser un número'),
  body('stock')
    .notEmpty().withMessage('El stock es obligatorio')
    .isInt({ min: 0 }).withMessage('El stock debe ser un número entero positivo'),
  body('autorId')
    .notEmpty().withMessage('El ID del autor es obligatorio')
    .isInt().withMessage('El ID del autor debe ser un número entero'),
  body('generoId')
    .notEmpty().withMessage('El ID del género es obligatorio')
    .isInt().withMessage('El ID del género debe ser un número entero'),
  handleValidationErrors
];

// Validación para parámetros de ID
const validateIdParam = [
  param('id')
    .isInt().withMessage('El ID debe ser un número entero'),
  handleValidationErrors
];

// Validación para parámetros de autorId
const validateIdParamAutor = [
  param('autorId') // Cambié 'id' por 'autorId'
    .isInt().withMessage('El ID debe ser un número entero'),
  handleValidationErrors
];

// Validación para parámetros de autorId
const validateIdParamGenero = [
  param('generoId') // Cambié 'id' por 'autorId'
    .isInt().withMessage('El ID debe ser un número entero'),
  handleValidationErrors
];

module.exports = {
  validateAutorCreation,
  validateGeneroCreation,
  validateLibroCreation,
  validateIdParam,
  validateIdParamAutor,
  validateIdParamGenero
};
