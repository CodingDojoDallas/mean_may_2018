var mongoose = require('mongoose')
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'Panda'
var tasks = require('../controllers/tasks.js')

module.exports = (app) => {

    // Index request to show all users
    app.get('/', tasks.index);

    app.get('/new/:name', tasks.new);

    app.get('/remove/:name', tasks.remove);

    app.get('/:name', tasks.view);
}