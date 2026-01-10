const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

// Listar todos los usuarios
router.get('/', async (req, res) => {
    try {
        const arrayUsuariosDB = await Usuario.find();
        res.render("usuarios", { arrayUsuarios: arrayUsuariosDB });
    } catch (error) {
        console.error(error);
    }
});

// Formulario para crear usuario
router.get('/crear', (req, res) => {
    res.render('crear_usuario');
});

// Crear usuario
router.post('/', async (req, res) => {
    const body = req.body;
    try {
        const usuarioDB = new Usuario(body);
        await usuarioDB.save();
        res.redirect('/usuarios');
    } catch (error) {
        console.log('error', error);
    }
});

// Detalle de un usuario
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const usuarioDB = await Usuario.findOne({ _id: id });
        res.render('detalle_usuario', { usuario: usuarioDB, error: false });
    } catch (error) {
        res.render('detalle_usuario', { error: true, mensaje: 'Usuario no encontrado!' });
    }
});

module.exports = router;
