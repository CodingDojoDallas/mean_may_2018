var mongoose = require('mongoose')
var Panda = mongoose.model('Panda') // We are retrieving this Schema from our Models, named 'Panda'

module.exports = {
    index: (request, response) => {
        Panda.find({}, (err, pandas) => {
            if (err) {
                console.log(err);
            }
            else {
                response.render('index', { pandas: pandas });
            }
        });
    },

    new: (request, response) => {
        response.render('add_panda');
    },

    process_new: (request, response) => {
        var pandas = new Panda({ name: request.body.name, age: request.body.age, food: request.body.food });
        pandas.save((err) => {
            if (err) {
                console.log('Something went wrong', err);
                for (var key in err.errors) {
                    request.flash('registration', err.errors[key].message);
                }
                response.redirect('/panda/new');
            }
            else {
                console.log('Successfully added a panda!');
                response.redirect('/');
            }
        });
    },

    view: (request, response) => {
        console.log("The panda id requested is:", request.params.id);
        Panda.findOne({ _id: request.params.id }, (err, panda) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(panda);
                response.render('display', { panda: panda });
            }
        });
    },

    edit: (request, response) => {
        console.log('The panda id requested is:', request.params.id);
        Panda.findOne({ _id: request.params.id }, (err, panda) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(panda);
                response.render('edit_panda', { panda: panda });
            }
        });
    },

    process_edit: (request, response) => {
        console.log('The panda id requested is:', request.params.id);
        Panda.update({ _id: request.params.id }, { name: request.body.name, age: request.body.age, food: request.body.food }, (err) => {
            if (err) {
                console.log('There was an error', err);
            }
            else {
                console.log('Successfully edited a panda!')
                response.redirect('/')
            }
        });
    },

    remove: (request, response) => {
        console.log('The panda id requested is:', request.params.id);
        Panda.remove({ _id: request.params.id }, (err) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log('Panda has successfully been released into the wild!')
                response.redirect('/')
            }
        });
    }
}