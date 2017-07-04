var http = require('http');
var server = require('./config/express');

var port =  process.env.PORT || 3000;

server.listen(port, function(){
	console.log('Servidor Iniciado');
});