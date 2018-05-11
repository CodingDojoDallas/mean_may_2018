var path	 = require('path'),
	quotes	 = require('../controllers/quotes')


module.exports = (app) => {
	app.get('/', quotes.index);
	app.post('/quotes', quotes.save);
}

