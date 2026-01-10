require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Configuración EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para recibir datos del body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas (igual que tu ejemplo)
app.use('/', require('./router/rutas'));      // Ruta principal
app.use('/usuarios', require('./router/usuarios')); // Nuestra ruta CRUD usuarios

// Conexión a MongoDB Atlas
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster.uizdr79.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri)
    .then(() => console.log('MongoDB Atlas conectado'))
    .catch(err => console.log('Error de conexión', err));

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
