var generateMessage = (from, text) => {
  return {
    from : from,
    text : text,
    createdAt : new Date().getTime()
  };
};

var generateLocationMessage = function(from, latitude, longitude) {
  return {
    from,
    url:'https://www.google.com/maps?q='+ latitude.toString() + ',' + longitude.toString(),
    createdAt:new Date().getTime()
  }
}

module.exports = {generateMessage, generateLocationMessage};
