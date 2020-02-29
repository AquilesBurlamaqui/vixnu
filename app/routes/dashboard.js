module.exports = function (application) {
	
	application.get('/dashboard', function(req, res) {
		application.app.controllers.dashboard.iniciaDashBoard(application, req,res);
	});

	application.post('/dashboard', function(req, res) {
		application.app.controllers.dashboard.iniciaDashBoard(application, req,res);
	});

}