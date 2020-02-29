/*importa as configuracoes do servidor*/
var app = require('./config/server')

/*parametrizar a porta de escuta*/
var server = app.listen('80', function() {
	console.log("Servidor ON");
});

var io = require('socket.io').listen(server);
var clientes = 0;

app.set('io',io);

//criar conexão por websocket
io.on('connection',function(socket){
	console.log("usuário "+socket.id+" conectado ");
	clientes++;
    console.log("clientes: " + clientes);

	
	socket.on('disconnect', function(){
		console.log("usuario "+socket.id+" desconectou!");
		clientes--;
    	console.log("clientes: " + clientes);
	});


	socket.on('clienteEntrandoNaSala', function(data){
		socket.join(data.sala);
		console.log("Entrando na sala "+data.sala);
	});


	socket.on('msgParaServidor', function(data){
		console.log("#msgParaServidor: "+data.sala+" "+data.apelido+" "+data.mensagem);
		//eventos de dialogo
		socket.emit('msgParaCliente',{apelido: data.apelido, mensagem:data.mensagem});
		socket.to(data.sala).emit('msgParaCliente',{apelido: data.apelido, mensagem:data.mensagem});
		
		//participantes
 		if(parseInt(data.apelido_atualizado_nos_clientes) ==0 ) {
 			socket.emit('participantesParaCliente',{apelido: data.apelido});
			socket.to(data.sala).emit('participantesParaCliente',{apelido: data.apelido});
 		} 
		
	});

	socket.on('questaoParaServidor', function(data){
		
		socket.emit('questaoParaCliente',{
			pergunta: data.pergunta, 
			op1:data.op1,
			op2:data.op2,
			op3:data.op3,
			op4:data.op4,
		});

		//enviando questao para clientes
		socket.to(data.sala).emit('questaoParaCliente',{
			pergunta: data.pergunta, 
			op1:data.op1,
			op2:data.op2,
			op3:data.op3,
			op4:data.op4,
		});

		
	});

});


