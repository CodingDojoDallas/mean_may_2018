var mongoose = require('mongoose')
var User = mongoose.model('Task') // We are retrieving this Schema from our Models, named 'Panda'
var tasks = require('../controllers/tasks.js')

module.exports = (app) => {

    // Index request to show all users
    app.get('/tasks', tasks.index);
    
    // Retrieve a specific task by ID
    app.get('/tasks/:id', tasks.view);
    
    // POST route to create task
    app.post('/tasks', tasks.new);
    
    // Update a specific task by ID
    app.patch('/tasks/:id', tasks.update);

    // Delete a specific task by ID
    app.delete('/tasks/:id', tasks.remove)
}