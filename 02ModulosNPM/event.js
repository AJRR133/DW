var EventEmitter = require('events').EventEmitter,
    pub = new EventEmitter()

pub 
    .on('myevent', function ( message){
        console.log(message)
    })

    .once('myevent', function ( message){
        console.log('Se emite la primera vez'+message)
    })

pub.emit('myevent', 'Soy un emisor de eventos')
pub.emit('myevent', 'volviendo a emitir')
pub.emit('myevent', 'volviendo a emitir por 3ª vez')