var mongoose = require('mongoose')
var Task = mongoose.model('Task') // We are retrieving this Schema from our Models, named 'Panda'

module.exports = {
    index: (request, response) => {
        Task.find({}, (err, tasks) => {
            if (err) {
                console.log(err);
            }
            else {
                response.json({message: "Success!", tasks: tasks});
            }
        });
    },

    new: (request, response) => {
        var tasks = new Task({ 
            title: request.body.title, 
            description: request.body.description,
        });
        tasks.save((err, tasks) => {
            if (err) {
                console.log('Something went wrong', err);
                for (var key in err.errors) {
                    request.flash('registration', err.errors[key].message);
                }
                response.json({message: 'There was an error', error: err});
            }
            else {
                console.log('Successfully added a user!');
                response.json({ tasks: tasks})
            }
        });
    },

    view: (request, response) => {
        console.log("The task id requested is:", request.params.id);
        Task.findOne({ _id: request.params.id }, (err, task) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(task);
                response.json({ task: task });
            }
        });
    },

    update: (request, response) => {
        console.log('The task id requested is:', request.params.id);
        Task.update({ _id: request.params.id }, { 
            title: request.body.title, 
            description: request.body.description, 
            completed: request.body.completed }, (err) => {
            if (err) {
                console.log('There was an error', err);
            }
            else {
                console.log('Successfully edited a task!')
                response.json()
            }
        });
    },

    remove: (request, response) => {
        console.log('The task id requested is:', request.params.id);
        Task.remove({ _id: request.params.id }, (err) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log('Task has successfully been removed!')
                response.json({message: 'Task has been removed'})
            }
        });
    },

    // // edit: (request, response) => {
    // //     console.log('The panda id requested is:', request.params.id);
    // //     Panda.findOne({ _id: request.params.id }, (err, panda) => {
    // //         if (err) {
    // //             console.log(err);
    // //         }
    // //         else {
    // //             console.log(panda);
    // //             response.render('edit_panda', { panda: panda });
    // //         }
    // //     });
    // // },

}