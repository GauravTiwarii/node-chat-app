const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

io.on('connection', (socket) =>{
  console.log('new user connected');


  socket.on('disconnect', (socket) =>{
    console.log('user disconnected');
  });

  socket.emit('newEmail', {
    from : 'mike@example.com',
    text : 'hey, whats up',
    createAt: 123
  });

  socket.on('createEmail', function(newEmail){
    console.log('create Email', newEmail);
  })

  socket.emit('newMessage', {
    from:8194862786,
    text:'hey, you know me?'
  })

  socket.on('createMessage', function(message){
    console.log(message)
  })

});




server.listen(port, () => {
  console.log('Started on Port ' + port + '.');
});
