var Emitter = require('events');

var emtr = new Emitter();
var eventConfig = require('./config').events;

emtr.on(eventConfig.GREET, function() {
    console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function() {
    console.log('A greeting occured!');
});

console.log('Hello!');
emtr.emit('greet');