const express = require('express') 
const router = express.Router();

router.get('/', (req, res) => {
    res.render("nuestras", { 
        arrayautoescuela: [ 
            {Ciudad: 'Sevilla', direccion: 'calle aguila 33',telefono: "979878989",aprobados: "93%"},
            {Ciudad: 'Malaga', direccion: 'calle halcon 34',telefono: "673557753",aprobados: "91%"},
            {Ciudad: 'Cadiz', direccion: 'calle palomo 35',telefono: "925624642",aprobados: "94%"},
            {Ciudad: 'Huelva', direccion: 'calle gorrion 36',telefono: "667887554",aprobados: "89%"},
            {Ciudad: 'Granada', direccion: 'calle gallo 37',telefono: "652547871",aprobados: "90%"},
        ]
    })
})




module.exports = router;