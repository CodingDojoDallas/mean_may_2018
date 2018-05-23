var express     = require('express'),
    port        = 6789,
    app         = express(),
    path        = require('path')
    session     = require('express-session'),
    bodyParser  = require('body-parser'),
    flash       = require('express-flash'),
    mongoose    = require('mongoose'),
    routes      = require('./server/config/routes.js')  
    db          = require('./server/config/mongoose.js')  

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/client/static")));
app.use(flash());

app.use(session({
    secret: '023409jdsedf',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

routes(app);

// mongoose.connect('mongodb://localhost/quotes');

app.listen(port, () => {
    console.log("Running on port 6789");
});


