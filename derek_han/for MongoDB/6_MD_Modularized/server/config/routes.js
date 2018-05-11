var dogs = require('../controllers/dogs');

module.exports = (app) => {
	app.get('/', dogs.index);
	app.get('/dogs/new', dogs.new)
	app.post('/dogs', dogs.create);
	app.get('/dogs/:id', dogs.show);
	app.get('/dogs/edit/:id', dogs.update);
	app.post('/dogs/:id', dogs.edit);
	app.post('/dogs/destroy/:id', dogs.destroy);
}