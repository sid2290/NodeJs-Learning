
var util = require('util');
var person = require('./person');
var policeman = require('./policeman');


util.inherits(policeman, person);
var person = new person();
person.greet();
console.log(person);

var policeman = new policeman('1234');


policeman.greet();
console.log(policeman);


