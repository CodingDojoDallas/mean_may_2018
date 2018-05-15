//Check the order of everything related to mongoose (require --> connect --> Schema --> Model --> route)
// Setting up Mongoose
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tasks');