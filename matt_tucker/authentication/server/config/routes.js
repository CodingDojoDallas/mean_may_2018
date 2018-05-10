let path    	= require('path'),
	users		= require('../controllers/users'),
	sessions	= require('../controllers/sessions'),
	moment		= require('moment');

module.exports = (app) => {
	// User
    app.get('/users', users.index);
    app.post('/users', users.create);
    // Session
    app.post('/login', sessions.create);
    app.delete('/logout', sessions.destroy);
}
