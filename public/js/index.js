var socket = io();
socket.on('connect', function () {
  console.log('Connected to server.');
  // socket.emit('createEmail', {
  //   to : 'jen@example.com',
  //   text: 'Hey, this is Andrew',
  // })
  //

  socket.on('welcomeUser', function(data){
    console.log(data.text);
  })
  socket.on('userJoined', function(data){
    console.log('From ' + data.from + ', ' + 'text: ' + data.text);
  })
});

socket.on('disconnect', function(){
  console.log('Disconnected from server.');
});

socket.on('newMessage', function(message){
  console.log('New message :', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}:${message.text}`);

  jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function(e){
  e.preventDefault();

  socket.emit('createMessage', {
    from :'User',
    text : jQuery('[name = message]').val()
  }, function() {

  });
})
