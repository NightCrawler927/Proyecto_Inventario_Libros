# Sistema de Inventario de Libros

Sistema backend para la gestión de un inventario de libros, que incluye información sobre autores y géneros literarios. Desarrollado con Node.js, Express, PostgreSQL y Sequelize.

## Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Características](#características)
- [Diagrama Entidad-Relación](#diagrama-entidad-relación)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [API Endpoints](#api-endpoints)
- [Docker](#docker)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Contribuciones](#contribuciones)

## Descripción General

Este proyecto implementa un sistema backend para gestionar un inventario de libros con sus respectivos autores y géneros. La aplicación sigue una arquitectura por capas (Controllers, Services, Models), utiliza Sequelize como ORM para PostgreSQL, y expone una API RESTful documentada con Swagger.

## Características

- CRUD completo para libros, autores y géneros
- Relaciones entre entidades (one-to-many)
- Validaciones de datos mediante middlewares
- Migraciones y semillas para la base de datos
- Documentación interactiva de la API con Swagger
- Containerización con Docker (opcional)

## Diagrama Entidad-Relación

```
+---------------+       +---------------+       +---------------+
|     Autor     |       |     Libro     |       |    Género     |
+---------------+       +---------------+       +---------------+
| id            |<----->| id            |<----->| id            |
| nombre        |       | título        |       | nombre        |
| nacionalidad  |       | precio        |       |               |
|               |       | stock         |       |               |
|               |       | autorId (FK)  |       |               |
|               |       | generoId (FK) |       |               |
+---------------+       +---------------+       +---------------+
```

- Un autor puede tener múltiples libros
- Un género puede tener múltiples libros
- Un libro pertenece a un autor y a un género

## Requisitos

- Node.js (v14 o superior)
- PostgreSQL (v12 o superior)
- npm o yarn

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/sistema-inventario-libros.git
   cd sistema-inventario-libros
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar variables de entorno:
   Copia el archivo `.env.example` a `.env` y personaliza las variables:
   ```bash
   cp .env.example .env
   ```

4. Crear la base de datos:
   ```bash
   npx sequelize-cli db:create
   ```

5. Ejecutar migraciones:
   ```bash
   npx sequelize-cli db:migrate
   ```

6. Cargar datos iniciales (opcional):
   ```bash
   npx sequelize-cli db:seed:all
   ```

## Configuración

### Variables de Entorno

El proyecto utiliza un archivo `.env` para configurar las variables de entorno:

```
DB_USERNAME=postgres
DB_PASSWORD=tu_contraseña
DB_NAME=inventario_libros
DB_HOST=localhost
DB_PORT=5432
PORT=3000
```

### Configuración de Sequelize

La configuración de la base de datos se encuentra en `config/database.js` y se basa en las variables de entorno definidas.

## Uso

### Iniciar en modo desarrollo

```bash
npm run dev
```

### Iniciar en modo producción

```bash
npm start
```

### Acceder a la documentación de la API

Una vez iniciada la aplicación, puedes acceder a la documentación de Swagger en:

```
http://localhost:3000/api-docs
```

## Estructura del Proyecto

```
sistema-inventario-libros/
├── .editorconfig         # Configuración del editor
├── .env                  # Variables de entorno
├── .eslintrc.json        # Configuración de ESLint
├── .gitignore            # Archivos ignorados por Git
├── config/               # Configuraciones de la aplicación
│   ├── config.json       # Configuración de Sequelize CLI
│   ├── database.js       # Configuración de la base de datos
│   └── swagger.js        # Configuración de Swagger
├── controllers/          # Controladores de la aplicación
│   ├── autorController.js
│   ├── generoController.js
│   └── libroController.js
├── docker-compose.yml    # Configuración de Docker Compose
├── index.js              # Punto de entrada de la aplicación
├── middlewares/          # Middlewares
│   └── validations.js    # Validaciones de datos
├── migrations/           # Migraciones de la base de datos
│   ├── create-autor.js
│   ├── create-genero.js
│   └── create-libro.js
├── models/               # Modelos de Sequelize
│   ├── autor.js
│   ├── genero.js
│   ├── index.js
│   └── libro.js
├── package.json          # Dependencias y scripts del proyecto
├── routes/               # Rutas de la API
│   ├── autorRoutes.js
│   ├── generoRoutes.js
│   ├── index.js
│   └── libroRoutes.js
├── seeders/              # Semillas para datos iniciales
│   ├── autores-seed.js
│   ├── generos-seed.js
│   └── libros-seed.js
├── services/             # Capa de servicios
│   ├── autorService.js
│   ├── generoService.js
│   └── libroService.js
└── utils/                # Utilidades compartidas
```

### Descripción de las Carpetas

- **config**: Configuraciones de la aplicación y la base de datos
- **controllers**: Procesamiento de solicitudes HTTP y respuestas
- **middlewares**: Funciones que procesan las solicitudes antes de llegar a los controladores
- **migrations**: Scripts para crear y modificar las tablas de la base de datos
- **models**: Definición de los modelos de datos y sus relaciones
- **routes**: Definición de las rutas de la API
- **seeders**: Datos iniciales para llenar la base de datos
- **services**: Lógica de negocio de la aplicación
- **utils**: Funciones de utilidad compartidas

## API Endpoints

### Autores

- `GET /api/autores` - Obtener todos los autores
- `GET /api/autores/:id` - Obtener un autor por ID
- `POST /api/autores` - Crear un nuevo autor
- `PUT /api/autores/:id` - Actualizar un autor existente
- `DELETE /api/autores/:id` - Eliminar un autor

### Géneros

- `GET /api/generos` - Obtener todos los géneros
- `GET /api/generos/:id` - Obtener un género por ID
- `POST /api/generos` - Crear un nuevo género
- `PUT /api/generos/:id` - Actualizar un género existente
- `DELETE /api/generos/:id` - Eliminar un género

### Libros

- `GET /api/libros` - Obtener todos los libros
- `GET /api/libros/:id` - Obtener un libro por ID
- `POST /api/libros` - Crear un nuevo libro
- `PUT /api/libros/:id` - Actualizar un libro existente
- `DELETE /api/libros/:id` - Eliminar un libro
- `GET /api/libros/autor/:autorId` - Obtener libros por autor
- `GET /api/libros/genero/:generoId` - Obtener libros por género

## Docker

El proyecto incluye configuración para ser ejecutado en contenedores Docker:

### Iniciar con Docker Compose

```bash
docker-compose up
```

Esto iniciará:
- Un contenedor con la aplicación Node.js
- Un contenedor con PostgreSQL

### Variables de Entorno para Docker

En el archivo `docker-compose.yml` se definen las variables de entorno para los contenedores.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución
- **Express**: Framework para APIs
- **PostgreSQL**: Base de datos relacional
- **Sequelize**: ORM para Node.js
- **Swagger/OpenAPI**: Documentación de la API
- **Docker**: Containerización (opcional)
- **ESLint**: Linting del código

## Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz fork del repositorio
2. Crea una rama para tu función (`git checkout -b feature/nueva-funcion`)
3. Realiza tus cambios y commit (`git commit -am 'Añadir nueva función'`)
4. Sube tus cambios (`git push origin feature/nueva-funcion`)
5. Crea un Pull Request
