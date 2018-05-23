var express     = require("express"),
    port        = 6789,
    app         = express(),
    path        = require('path')
    session     = require('express-session'),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    flash       = require('express-flash'),
    routes      = require('./server/config/routes.js')
    mongoose    = require('./server/config/mongoose.js')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/client/static")));
app.set('views', path.join(__dirname, '/client/views'));
app.set('view engine', 'ejs');
app.use(flash());

app.use(session({
    secret: '023409jdsedf',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

routes(app);


var server = app.listen(port, () => {
    console.log("Running on port 6789");
});
