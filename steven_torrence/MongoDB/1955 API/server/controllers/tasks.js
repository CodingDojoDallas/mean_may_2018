var mongoose = require('mongoose')
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'Panda'

module.exports = {
    index: (request, response) => {
        User.find({}, (err, users) => {
            if (err) {
                console.log(err);
            }
            else {
                response.json({users: users});
            }
        });
    },

    new: (request, response) => {
        var users = new User({ name: request.params.name});
        users.save((err, users) => {
            if (err) {
                console.log('Something went wrong', err);
                for (var key in err.errors) {
                    request.flash('registration', err.errors[key].message);
                }
                response.json({message: 'There was an error', error: err});
            }
            else {
                console.log('Successfully added a user!');
                response.json({ users: users})
            }
        });
    },

    remove: (request, response) => {
        console.log('The user name requested is:', request.params.name);
        User.remove({ name: request.params.name }, (err) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log('User has successfully been removed!')
                response.json({message: 'User has been removed'})
            }
        });
    },

    view: (request, response) => {
        console.log("The user name requested is:", request.params.name);
        User.findOne({ name: request.params.name }, (err, user) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(user);
                response.json({ user: user });
            }
        });
    },

    // edit: (request, response) => {
    //     console.log('The panda id requested is:', request.params.id);
    //     Panda.findOne({ _id: request.params.id }, (err, panda) => {
    //         if (err) {
    //             console.log(err);
    //         }
    //         else {
    //             console.log(panda);
    //             response.render('edit_panda', { panda: panda });
    //         }
    //     });
    // },

    // process_edit: (request, response) => {
    //     console.log('The panda id requested is:', request.params.id);
    //     Panda.update({ _id: request.params.id }, { name: request.body.name, age: request.body.age, food: request.body.food }, (err) => {
    //         if (err) {
    //             console.log('There was an error', err);
    //         }
    //         else {
    //             console.log('Successfully edited a panda!')
    //             response.redirect('/')
    //         }
    //     });
    // },

}