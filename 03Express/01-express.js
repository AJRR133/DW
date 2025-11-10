const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname+'/public'));


app.get('/', (req, res) => {
    console.log(__dirname)
  res.send('Bueenisimos tardes')
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

