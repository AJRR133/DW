const express = require('express') 
const app = express() 
const port = 3000 
app.set('view engine', 'ejs');
app.use('views', express.static(__dirname+'/views'));
app.use(express.static(__dirname+'/public'));

//app.get('/', (req, res) => {  
 //res.sendFile(__dirname+'/public/html/imagen.html')
//})

app.get('/', (req, res) => {
  res.render("index",{titulo:"Aprueba a la primera",descripcion:"descripcion JS"})
})

app.get('/contacto', (req, res) => {
  res.render("contacto",{titulo:"Telefono: 987629196",descripcion:"correo electronico: autoescuelal@gmail.com"})
})

app.use('/', require('./router/rutas'));
app.use('/autoescuelas', require('./router/escuelas'));

app.use('/', require('./router/rutas'));
app.use('/peques', require('./router/peques'));


app.get('/quienessomos', (req, res) => {
  res.render("quienessomos",{titulo:"Sobre nosotros",descripcion:"somos una pequeña empresa familiar de autoescuelas"})
})


app.listen(port, () => { 
  console.log(`Example app listening at http://localhost:${port}`)
 
})

