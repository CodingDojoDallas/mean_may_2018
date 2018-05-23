var mongoose = require('mongoose');
Author = mongoose.model('Author')

module.exports = {

    showAll: function (req, res) {
        Author.find({}, function (err, authors) {
            if (err) {
                console.log("Returned error", err);
                // respond with JSON
                res.json({ message: "Error", error: err })
            }
            else {
                // respond with JSON
                res.json({ message: "Success", data: authors })
            }
        })
    },

    create: function (req,res) {
        console.log(req.body);
        Author.create({ name: req.body.name }, function (err, author) {
            if (err) {
                res.json({ message: "Error", error: err })
            } else {
                res.json({ message: "Sucessfully added Author", data: author })
            }
        })
    },

    show: function (req, res) {
        Author.findOne({ _id: req.params.id }, function (err, author) {
            if (err) {
                res.json('No such author!')
            } else {
                console.log('Author Found')
                res.json({ message: "Data requested", data: author })
            }
        });
    },

    update: function (req, res) {
        Author.findOne({ _id: req.params.id }, function (err, author) {
            if (err) {
                res.json('Edit fields wrong!')
            } else {
                author.name = req.body.name;
                author.save();
                res.json({ message: "Successfully editted", data: author })
            }
        });
    },

    destroy: function (req, res) {
        Author.remove({ _id: req.params.id }, function (err, author) {
            if (err) {
                res.json({ message: 'Error: Author not removed' })
            } else {
                res.json({ message: "Successfully removed Author", data: author })
            }
        });
    }
    
}