let express = require('express'),
     app = express();
app.use(express.static( __dirname + '/client/dist/client' ));

require('./server/config/routes.js')(app)

app.listen(8000, () => {
  console.log(`Listening on port 8000`);
})