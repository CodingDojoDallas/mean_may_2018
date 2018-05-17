let Task = require('../models/task');

module.exports = {
  index: (req, res) => {
    Task.find({}, (err, tasks) => {
      if (err) {
        return res.status(400).json(err.errors);
      }
      return res.json(tasks);
    })
  },
  create: function (req, res) {
    var task = new Task({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed
    });
    task.save(function (err) {
      if (err) {
        console.log("We have an error!", err);
        // for (var key in err.errors) {
        // req.flash('registration', err.errors[key].message);
        // }
        return res.status(400).json(err.message);
      } else {
        return res.json(task);
      }
    });
  },
  update: function (req, res) {
    Task.update({
      _id: req.params.id
    }, req.body, function (err, task) {
      if (err) {
        console.log("We have an error!", err);
        // for (var key in err.errors) {
        //   req.flash('registration', err.errors[key].message);
        // }
        return res.status(400).json(err.errors);
      } else {
        return res.json(task);
      }
    });
  },
  remove: function (req, res) {
    Task.remove({
      _id: req.params.id
    }, function (err) {
      if (err) {
        console.log("We have an error!", err);
        // for (var key in err.errors) {
        //   req.flash('registration', err.errors[key].message);
        // }
        return res.status(400).json(err.errors);
      }
      return res.json("Task removed successfully")
    });
  },
  info: function (req, res) {
    Task.findOne({
      _id: req.params.id
    }, function (err, task) {
      if (err) {
        return res.json({
          message: "testing"
        });
      }
      return res.json(task)
    });
  }
}