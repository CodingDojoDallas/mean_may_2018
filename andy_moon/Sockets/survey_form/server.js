const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);
var counter = 0;
    
io.on('connection', function (socket) {
  var user = {}
  socket.on('send', function(a){
    user = a;
    var num = Math.floor(Math.random()*1000);
    user["number"] = num;
    socket.emit("stud", user); 
  })
});
