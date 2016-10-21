var EventEmitter = require('events');
var util = require('util');

var Greetr = require('./greet');

util.inherits(Greetr, EventEmitter);

var greeter = new Greetr();

greeter.on('greet', function() {
    console.log('Somewhere, someone said hello.')
});

greeter.greet();
