/*importar os moudelo da app*/
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

/*iniciar o modulo express*/
var app = express();

/*setar variaveis view engine e views*/
app.set('view engine', 'ejs');
app.set('views','./app/views');

/* configurar o middlewares*/
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());

/*configurar os autoload via consign*/
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);

//exportar o app
module.exports = app;