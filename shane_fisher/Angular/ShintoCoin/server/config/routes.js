var mongoose = require('mongoose');
    Default = mongoose.model('Default')

var defaults =require('../controllers/Defaults.js')

module.exports = function(app){

    app.get('/defaults', function (req, res) {
        defaults.showAll(req, res);
    });

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
    });

}
