
var util = require('util');
var greet = require('./greet');

greet.greet();

// using native module util

var name = " Sid ";
var greeting = util.format('Hello, %s', name);
util.log(greeting);