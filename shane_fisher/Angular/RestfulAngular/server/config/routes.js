var mongoose = require('mongoose');
    Task = mongoose.model('Task')

var tasks =require('../controllers/tasks.js')

module.exports = function(app){

    app.get('/tasks', function (req, res) {
        tasks.showAll(req,res);
    });

    app.get('/tasks/:id', function (req, res) {
        tasks.show(req,res);
    });

    app.post('/tasks', function (req, res) {
        tasks.create(req,res);
    });

    app.put('/tasks/:id/edit', function (req, res) {
        tasks.update(req, res);
    });

    app.delete('/tasks/:id', function (req, res){
        tasks.destroy(req,res);
    })
}
