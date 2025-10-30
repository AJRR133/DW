var http = require('http')

function webserver(req,res){
  res.writeHead(200, {'Content-Type': 'text/html'}).end('<h1>Hola node.js</h1>')
}

http
  .createServer(webserver)
  .listen(3000,'localhost')

console.log('Servidor corriendo en http://localhost:3000/')