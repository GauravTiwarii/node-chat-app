const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const {generateMessage} = require('./utils/message');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

io.on('connection', (socket) =>{
  console.log('new user connected');
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'new user joined'));

  socket.emit('welcomeUser', {
    text: 'Welcome to the Chat APP'
  })
  socket.broadcast.emit('userJoined',generateMessage("Admin", "Welcome to the chat app"))

  socket.on('disconnect', (socket) =>{
    console.log('user disconnected');
  });


  socket.on('createMessage', function(message, callback){

    io.emit('newMessage',generateMessage(message.from, message.text));

    callback();
  })

});




server.listen(port, () => {
  console.log('Started on Port ' + port + '.');
});
