module.exports = function (application) {
	application.get('/admin', function(req, res) {
		application.app.controllers.admin.admin(application, req, res);
	});

}