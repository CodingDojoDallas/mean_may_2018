var mongoose = require('mongoose');
    Player = mongoose.model('Player')

var players =require('../controllers/players.js')

module.exports = function(app){

    

    app.get('/players', function (req, res) {
       players.show(req,res);
    });

    app.post('/players', function (req, res) {
        players.create(req,res);
    });
}
