let Wolf = require('../models/wolf');
module.exports = {
  index: function (req, res) {
    Wolf.find({}, function (err, wolves) {
      res.render('index', {wolves: wolves})
    })
  },
  new: function (req, res) {
    res.render('new');
  },
  info: function (req, res) {
    Wolf.findOne({_id: req.params.id}, function (err, info) {
      res.render('info', {info: info});
    });
  },
  edit: function (req, res) {
    Wolf.findOne({_id: req.params.id}, function (err, info) {
      res.render('edit', {info: info});
    });
  },
  create: function (req, res) {
    var wolf = new Wolf({
      name: req.body.name,
      color: req.body.color,
      stripes: req.body.stripes,
      sex: req.body.sex,
      age: req.body.age,
    });
    wolf.save(function (err) {
      if (err) {
        console.log("We have an error!", err);
        for (var key in err.errors) {
          req.flash('registration', err.errors[key].message);
        }
        res.redirect('/animal/new');
      } else {
        res.redirect('/');
      }
    });
  },
  update: function (req, res) {
    Wolf.update({_id: req.params.id}, req.body, function (err) {
      if (err) {
        console.log("We have an error!", err);
        for (var key in err.errors) {
          req.flash('registration', err.errors[key].message);
        }
        res.redirect('/animal/edit/' + req.params.id);
      } else {
        res.redirect('/');
      }
    });
  },
  remove:function (req, res) {
    Wolf.remove({_id: req.params.id}, function (err) {
      if (err) {
        console.log("We have an error!", err);
        for (var key in err.errors) {
          req.flash('registration', err.errors[key].message);
        }
      }
      res.redirect('/');
    });
  }
}