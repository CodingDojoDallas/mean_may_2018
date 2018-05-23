var path  = require('path'),
  tasks   = require('../controllers/tasks.js');
  // var mongoose = require('mongoose'),
  // Task = mongoose.model('Task')

module.exports = function (app) {
  app.get('/tasks', tasks.index);
  app.post('/tasks', tasks.create);
  app.patch('/tasks/:id', tasks.update);
  app.delete('/tasks/:id', tasks.remove);
  app.get('/tasks/:id', tasks.info);  
  
}