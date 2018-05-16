var mongoose = require('mongoose');
Task = mongoose.model('Task')

module.exports = {
    showAll: function (req, res) {
        Task.find({}, function (err, tasks) {
            if (err) {
                console.log("Returned error", err);
                // respond with JSON
                res.json({ message: "Error", error: err })
            }
            else {
                // respond with JSON
                res.json({ message: "Success", data: tasks })
            }
        })
    },

    create: function (req, res) {
        Task.create({ title: req.body.title, description: req.body.description, completed: req.body.completed }, function (err, task) {
            if (err) {
                res.json({ message: "Error", error: err })
            } else {
                res.json({ message: "Sucessfully added Task", data: task })
            }
        })
    },

    show: function (req, res) {
        Task.findOne({ _id: req.params.id }, function (err, task) {
            if (err) {
                res.json('No such task!')
            } else {
                res.json({ message: "Data requested", data: task })
            }
        });
    },

    update: function (req, res) {
        Task.findOne({ _id: req.params.id }, function (err, task) {
            if (err) {
                res.json('Edit fields wrong!')
            } else {
                task.title = req.body.title;
                task.description = req.body.description;
                task.save();
                res.json({message: "Successfully editted", data: task})
            }
        });
    },
    

    destroy: function (req, res) {
        Task.remove({_id: req.params.id}, function (err) {
            if (err) {
                res.json({ message: 'Error: Task not removed'})
            } else {
                res.json({message: "Successfully removed name"})
            }
        });
    }


    

}