module.exports.iniciaChat = function(application, req, res) {
	var dadosForm = req.body;

	req.assert('apelido','Nome ou Apelido obrigatório').notEmpty();
	req.assert('apelido','Nome ou Apelido deve ter 3 a 15 caracteres').len(3,15);
	req.assert('sala','Id da Sala obrigatório').notEmpty();

	var erros = req.validationErrors();
	if(erros) {
		res.render('index',{validacao:erros});
		return;
	}

	application.get('io').to(dadosForm.sala).emit(
		'msgParaCliente', 
		{apelido: dadosForm.apelido, sala:dadosForm.sala,  mensagem:' acabou de entrar no chat'}
	);
	

	res.render('chat', {dadosForm:dadosForm});
}