const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

// LISTAR
router.get('/', async (req, res) => {
    try {
        const arrayUsuariosDB = await Usuario.find();
        res.render('usuarios', {
            arrayUsuarios: arrayUsuariosDB
        });
    } catch (error) {
        console.error(error);
    }
});

// FORM CREAR
router.get('/crear', (req, res) => {
    res.render('crear_usuario');
});

// CREAR
router.post('/', async (req, res) => {
    try {
        const usuarioDB = new Usuario(req.body);
        await usuarioDB.save();
        res.redirect('/usuarios');
    } catch (error) {
        console.log(error);
    }
});

// DETALLE (EDITAR / ELIMINAR)
router.get('/:id', async (req, res) => {
    try {
        const usuarioDB = await Usuario.findById(req.params.id);
        res.render('detalle_usuario', {
            usuario: usuarioDB,
            error: false
        });
    } catch (error) {
        res.render('detalle_usuario', {
            error: true,
            mensaje: 'Usuario no encontrado'
        });
    }
});

// ELIMINAR 
router.post('/eliminar/:id', async (req, res) => {
    try {
        await Usuario.deleteOne({ _id: req.params.id });
        res.redirect('/usuarios');
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
