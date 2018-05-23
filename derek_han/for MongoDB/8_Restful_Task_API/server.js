let express     = require('express'),
    port        = 6789,
    app         = express(),
    path        = require('path'),
    body_parser = require('body-parser')
    flash		= require('express-flash'),
    routes      = require('./server/config/routes.js'),
    mongoose    = require('./server/config/mongoose.js');
    session 	= require('express-session');

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json()); //NEED THIS FOR API
app.use(express.static(path.join(__dirname, '/client/static')));

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(flash());

routes(app);


app.listen(port, () => {
    console.log("listening on port 6789");
});

