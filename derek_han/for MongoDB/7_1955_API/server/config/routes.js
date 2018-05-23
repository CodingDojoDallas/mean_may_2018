var path 	= require('path'),
	user	= require('../controllers/users');


module.exports = (app) => {
	app.get('/', user.index);
	app.get('/new/:name', user.create);
	app.get('/remove/:name', user.destroy);
	app.get('/:name', user.show);
}