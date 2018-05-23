let Task = require('../models/task');

module.exports = {
  index: (req, res)=> {
    console.log('sup sup')
    Task.find({}, (err, tasks) => {
     return res.json(tasks)
    })
  },
  create: function (req, res) {
    var task = new Task({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed
    });
    
    task.save( function (err) {
    if (err) {
      console.log("We have an error!", err);
      // for (var key in err.errors) {
      // req.flash('registration', err.errors[key].message);
      // }
      return res.json(err);
    } else {
      return res.json(task);
    }
    });
  },
  update: function (req, res) {
    Task.update({_id: req.params.id}, req.body, function (err, task) {
      if (err) {
        console.log("We have an error!", err);
        // for (var key in err.errors) {
        //   req.flash('registration', err.errors[key].message);
        // }
        return res.json(err);
      } else {
        return res.json(task);
      }
    });
  },
  remove:function (req, res) {
    Task.remove({_id: req.params.id}, function (err) {
      if (err) {
        console.log("We have an error!", err);
        // for (var key in err.errors) {
        //   req.flash('registration', err.errors[key].message);
        // }
      }
      return res.json("Deleted");
    });
  },
  info: function (req, res) {
    Task.findOne({_id: req.params.id}, function (err, info) {
       res.json(info);
    });
  }
}