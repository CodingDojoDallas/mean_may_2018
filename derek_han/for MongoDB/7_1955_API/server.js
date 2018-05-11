let express     = require('express'),
    port        = 6789,
    app         = express(),
    path        = require('path'),
    body_parser = require('body-parser')
    routes      = require('./server/config/routes.js'),
    mongoose    = require('./server/config/mongoose.js')

// require('./server/config/mongoose.js');

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json()); //NEED THIS FOR API
app.use(express.static(path.join(__dirname, '/client/static')));

routes(app);


app.listen(port, () => {
    console.log("listening on port 6789");
});

