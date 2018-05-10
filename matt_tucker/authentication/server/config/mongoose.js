var mongoose = require("mongoose"),
    db_name  = "login";

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://localhost/${db_name}`);