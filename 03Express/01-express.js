const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use('views', express.static(__dirname+'/views'));
app.use(express.static(__dirname+'/public'));


/*app.use ((req,res) => {
 res.status(404).sendFile(__dirname+'/public/html/404.html')
})*/

app.get('/pruebas', (req, res) => {
  res.render("pruebas",{titulo:"Titulo dinamico"})
})

app.get('/contacto', (req, res) => {
    console.log(__dirname)
  res.send('contacto')
})
app.get('/about_us', (req, res) => {
    console.log(__dirname)
  res.send('about_us')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

