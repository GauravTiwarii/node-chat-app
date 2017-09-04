var socket = io();
socket.on('connect', function () {
  console.log('Connected to server.');
  socket.emit('createEmail', {
    to : 'jen@example.com',
    text: 'Hey, this is Andrew',
  })

  socket.emit('createMessage', {
    from: 111383822,
    message : 'hey, you there'
  })
});

socket.on('disconnect', function(){
  console.log('Disconnected from server.');
});

socket.on('newEmail', function(email) {
  console.log('New Email :', email);
});

socket.on('newMessage', function(message){
  console.log('New message :', message);
});
