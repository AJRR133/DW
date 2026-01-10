const express = require('express');
const router = express.Router();

// Ruta principal mínima
router.get('/', (req, res) => {
    res.send('Página principal');
});

module.exports = router;
