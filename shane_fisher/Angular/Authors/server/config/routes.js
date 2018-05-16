var mongoose = require('mongoose');
    Author = mongoose.model('Author')

var authors =require('../controllers/Authors.js')

module.exports = function(app){

    app.get('/authors', function (req, res) {
        authors.showAll(req, res);
    });

    app.get('/authors/:id', function (req, res) {
        authors.show(req, res);
    });

    app.post('/addauthor', function (req, res) {
        authors.create(req,res);
    })

    app.put('/authors/:id/edit', function (req, res) {
        authors.update(req, res);
    });

    app.delete('/authors/:id', function (req, res) {
        authors.destroy(req, res);
    })

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
    });

}
