/*importa as configuracoes do servidor*/
var app = require('./config/server')

/*parametrizar a porta de escuta*/
var server = app.listen('80', function() {
	console.log("Servidor ON");
});

var io = require('socket.io').listen(server);

app.set('io',io);

//criar conexão por websocket
io.on('connection',function(socket){
	console.log("usuário conectado!"+socket);

	
	socket.on('disconnect', function(){
		console.log("usuário desconectou!");
	});


	socket.on('msgParaServidor', function(data){
		//eventos de dialogo
		socket.emit('msgParaCliente',{apelido: data.apelido, mensagem:data.mensagem});
		socket.broadcast.emit('msgParaCliente',{apelido: data.apelido, mensagem:data.mensagem});
 		//participantes
 		if(parseInt(data.apelido_atualizado_nos_clientes) ==0 ) {
 			socket.emit('participantesParaCliente',{apelido: data.apelido});
			socket.broadcast.emit('participantesParaCliente',{apelido: data.apelido});
 		} 
		
	});

	


});


