var path = require('path'),
  wolves = require('../controllers/wolves');

module.exports = function (app) {
  app.get('/', wolves.index);
  app.get('/animal/new', wolves.new);
  app.get('/animal/:id', wolves.info);
  app.get('/animal/edit/:id', wolves.edit);
  app.post('/animals', wolves.create);
  app.post('/animal/:id', wolves.update);
  app.get('/animal/destroy/:id', wolves.remove);
  
  var mongoose = require('mongoose'),
  Wolf = mongoose.model('Wolf')
}