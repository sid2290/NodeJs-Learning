
var greet = require('./greet');
console.log(greet.greeting);

// What will happen if I require the exact same file again
greet.greeting = 'Changed Hello world!';
var greetb = require('./greet');
console.log(greet.greeting);