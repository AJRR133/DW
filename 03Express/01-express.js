const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.use('views', express.static(__dirname+'/views'));
app.use(express.static(__dirname+'/public'));




/*app.use ((req,res) => {
 res.status(404).sendFile(__dirname+'/public/html/404.html')
})*/


app.use('/', require('./router/rutas'));
app.use('/pokemon', require('./router/pokemon'));

const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster.uizdr79.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri)

  .then(()=>console.log('Base de datos conectada'))
  .catch(e=>console.log(e))

app.get('/pruebas', (req, res) => {
  res.render("pruebas",{titulo:"Titulo dinamico",descripcion:"descripcion JS"})
})

app.get('/pruebas2', (req, res) => {
  res.render("pruebas2",{titulo2:"Titulo dinamico 2",descripcion2:"descripcion JS 2"})
})



app.get('/about_us', (req, res) => {
    console.log(__dirname)
  res.send('about_us')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

