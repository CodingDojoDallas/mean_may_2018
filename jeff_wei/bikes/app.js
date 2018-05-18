let express = require('express'),
     app = express(),
     bodyParser= require('body-parser'),
     session = require('express-session')
app.use(session({
	secret: 'aslfdj23jr-o8ihjfiasjdfh',
	resave:false,
	saveUninitialized:true
}))
app.use(express.static( __dirname + '/client/dist/client' ));
app.use(bodyParser.json())

var bcrypt=require('bcrypt')
var uniqueValidator= require('mongoose-unique-validator')

require('./server/config/mongoose.js')
require('./server/models/User.js')
require('./server/models/Bike.js')
require('./server/config/routes.js')(app)

app.listen(8000, () => {
  console.log(`Listening on port 8000`);
})