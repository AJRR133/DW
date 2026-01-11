const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: String,
    correo: String,
    rol: String, // basico | premium | admin
    fecha_registro: {
        type: Date,
        default: Date.now
    },
    contraseña: String
});

const Usuario = mongoose.model('Usuario', usuarioSchema, 'usuarios');

module.exports = Usuario;
