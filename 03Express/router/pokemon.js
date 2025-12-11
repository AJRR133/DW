const express = require('express') 
const router = express.Router();
const Pokemon = require('../models/pokemon')

router.get('/', async (req, res) => {
    try{
        const arrayPokemonDB = await Pokemon.find();
        console.log(arrayPokemonDB);
        res.render("pokemon",{
            arrayPokemon: arrayPokemonDB
        })
    } catch(error){
        console.error(error)
    }
        
    
})
module.exports = router;