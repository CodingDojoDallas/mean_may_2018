let express = require('express'),
     app = express();
     bodyParser= require('body-parser')

app.use(express.static( __dirname + '/client/dist/client' ));
app.use(bodyParser.json())

require('./server/config/mongoose.js')
require('./server/models/product.js')
require('./server/config/routes.js')(app)

app.listen(8000, () => {
  console.log(`Listening on port 8000`);
})