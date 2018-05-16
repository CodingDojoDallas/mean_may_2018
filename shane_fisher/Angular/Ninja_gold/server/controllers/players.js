var mongoose = require('mongoose');
Player = mongoose.model('Player')

module.exports = {
    create: function (req, res) {
        Player.find({name: req.body.name}, function(err, player){
            if (err) {
                Player.create({ name: req.body.name });
                res.json({ message: "Player created"});
            } else {
                req.session.player = player;
                res.json({ message: "Player logged in"});
            }
        })
        
    },
    
}

