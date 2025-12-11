const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
    nombre:String,
    tipo:String,
    descripcion:String
})

const Pokemon = mongoose.model('Pokemon',pokemonSchema,"pokemon")

module.exports = Pokemon;