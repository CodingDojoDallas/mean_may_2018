var mongoose = require('mongoose')
var Task = mongoose.model('Task') // We are retrieving this Schema from our Models, named 'Panda'

module.exports = {
    index: (request, response) => {
        Task.find({}, (err, tasks) => {
            if (err) {
                console.log(err);
                response.status(400).json(err.errors)
            }
            else {
                console.log(tasks)
                response.json(tasks);
            }
        });
    },

    create: (request, response) => {
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
                response.status(400).json({message: 'There was an error', error: err});
            }
            else {
                console.log('Successfully added a user!');
                response.json(tasks)
            }
        });
    },

    show: (request, response) => {
        console.log("The task id requested is:", request.params.id);
        Task.findOne({ _id: request.params.id }, (err, task) => {
            if (err) {
                console.log(err);
                response.status(400).json(err.errors);
            }
            else {
                console.log(task);
                response.json(tasks);
            }
        });
    },

    update: (request, response) => {
        console.log('The task id requested is:', request.params.id);
        Task.update({ _id: request.params.id }, { 
            title: request.body.title, 
            description: request.body.description}, (err, tasks) => {
            if (err) {
                console.log('There was an error', err);
                response.status(400).json(err.errors);
            }
            else {
                console.log('Successfully edited a task!')
                response.json(tasks);
            }
        });
    },

    destroy: (request, response) => {
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
}