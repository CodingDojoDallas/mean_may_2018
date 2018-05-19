var mongoose = require('mongoose')
var Author = mongoose.model('Author') // We are retrieving this Schema from our Models, named 'Author'

module.exports = {
    index: (request, response) => {
        Author.find({}, (err, authors) => {
            if (err) {
                console.log(err);
                response.status(400).json(err.errors)
            }
            else {
                console.log(authors)
                response.json(authors);
            }
        });
    },

    create: (request, response) => {
        var author = new Author({
            name: request.body.name
        });
        author.save((err, author) => {
            if (err) {
                console.log('Something went wrong', err.message);
                response.status(400).json(err.errors);
            }
            else {
                console.log('Successfully added an author!');
                response.json(author)
            }
        });
    },

    show: (request, response) => {
        console.log("The task id requested is:", request.params.id);
        Author.findOne({ _id: request.params.id }, (err, author) => {
            if (err) {
                console.log(err);
                response.status(400).json(err.errors);
            }
            else {
                console.log(author);
                response.json(author);
            }
        });
    },

    update: (request, response) => {
        console.log('The task id requested is:', request.params.id);
        Author.update({ _id: request.params.id }, {
            name: request.body.name
        }, (err, authors) => {
            if (err) {
                console.log('There was an error', err);
                response.status(400).json(err.errors);
            }
            else {
                console.log('Successfully edited an author!')
                response.json(authors);
            }
        });
    },

    destroy: (request, response) => {
        console.log('The task id requested is:', request.params.id);
        Author.remove({ _id: request.params.id }, (err, author) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log('Author has successfully been removed!')
                response.json(author)
            }
        });
    },
}