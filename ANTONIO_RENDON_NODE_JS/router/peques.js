const express = require('express') 
const router = express.Router();

router.get('/', (req, res) => {
    res.render("peques", { 
        arraypeques: [ 
            {Peques: 'prueba 1'},
            {Peques: 'prueba 2'},
            {Peques: 'prueba 3'},
        ]
    })
})




module.exports = router;