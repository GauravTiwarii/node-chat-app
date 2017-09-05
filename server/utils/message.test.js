var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {

  it('should   correct message', () => {
    var from  = 'Jen';
    var text = 'some message';

    var message = generateMessage(from, text);
    console.log(message);
    expect(message).toInclude({from, text});
  })

});
