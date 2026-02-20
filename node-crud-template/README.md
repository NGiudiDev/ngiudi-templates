# CRUD Template Node.js + Express + Sequelize

Este proyecto es un template de un CRUD básico que sirve para operar con cualquier tabla de la base de datos.

Se aplica Clean Architecture, Express, Sequelize y un CRUD genérico para cualquier tabla.

## Estructura
- **src/config**: Configuración de la app
- **src/controllers**: Controladores (GenericController)
- **src/domain**: Modelos de dominio (GenericModel)
- **src/infrastructure**: Conexión a base de datos (db.js)
- **src/repositories**: Repositorios (GenericRepository)
- **src/routes**: Rutas (generic.routes.js)
- **src/usecases**: Casos de uso (puedes agregar aquí lógica de negocio)

## Uso
1. Instala dependencias:
   ```bash
   npm install
   ```
2. Ejecuta el servidor:
   ```bash
   npm run dev
   ```
3. Endpoints genéricos:
   - `GET /api/:table` — Listar registros
   - `GET /api/:table/:id` — Obtener por ID
   - `POST /api/:table` — Crear
   - `PUT /api/:table/:id` — Actualizar
   - `DELETE /api/:table/:id` — Eliminar

> El CRUD es genérico: funciona para cualquier tabla existente en la base de datos SQLite.

## Notas
- Puedes crear tablas usando Sequelize o directamente en SQLite.
- Agrega lógica de negocio en `src/usecases` si lo necesitas.
