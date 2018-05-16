var mongoose = require('mongoose');
Default = mongoose.model('Default')

module.exports = {

    showAll: function (req, res) {
        Default.find({}, function (err, defaults) {
            if (err) {
                console.log("Returned error", err);
                // respond with JSON
                res.json({ message: "Error", error: err })
            }
            else {
                // respond with JSON
                res.json({ message: "Success", data: defaults })
            }
        })
    },
    
}