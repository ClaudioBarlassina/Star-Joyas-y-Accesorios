// index.js
require('dotenv').config();
const express = require('express');
const { Client } = require('pg');

const app = express();
const port = process.env.PORT || 8080;

// Conexión a la base de datos PostgreSQL
const client = new Client({
  connectionString: process.env.DATABASE_URL, // Asegúrate de tener la URL de conexión en tu entorno
});

client.connect()
  .then(() => console.log('Conectado a PostgreSQL'))
  .catch(err => console.error('Error al conectar a PostgreSQL', err.stack));

// Configuración básica de una ruta
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});
app.get("/productos", (req, res) => {

})
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
