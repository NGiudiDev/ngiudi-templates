// * Configuración del servidor
export const serverConfig = {
  env: process.env.NODE_ENV || "development",
  port: parseInt(process.env.API_PORT) || 9000,
  corsOrigin: process.env.CORS_ORIGIN || "*",
};

//* Configuración de base de datos
const databaseConfig = {
    host: process.env.DB_HOST || "localhost",
    name: process.env.DB_NAME || "crud_template_dev_node",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
};

export const config = {
  server: serverConfig,
  database: databaseConfig,
};