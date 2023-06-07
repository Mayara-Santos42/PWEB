var eventos = require('events');
var EmissorEventos = eventos.EventEmitter;
var ee = new EmissorEventos();

ee.on('dados', fecha => console.log(fecha));

setInterval(() => ee.emit('dados', Date.now()), 500);