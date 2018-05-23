var mongoose = require('mongoose')
var Panda = mongoose.model('Panda') // We are retrieving this Schema from our Models, named 'Panda'
var tasks = require('../controllers/tasks.js')

module.exports = (app) => {

    // Index request to show all pandas
    app.get('/', tasks.index);

    // Add a new Panda
    app.get('/panda/new', tasks.new);

    // POST route for adding a new Panda
    app.post("/pandas", tasks.process_new);

    // View a specific Panda
    app.get('/panda/:id', tasks.view);

    // Display a form to Edit a specific Panda
    app.get('/panda/edit/:id', tasks.edit);

    // Edit form is submitted/processed to this route
    app.post('/pandas/:id', tasks.process_edit);
    
    // Remove a panda from the DB
    app.post('/panda/release/:id', tasks.remove);

}