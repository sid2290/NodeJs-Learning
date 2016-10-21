var fs = require('fs');

// Node way of dealing with the files synchronously
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

console.log(greet);

// Node way of dealing with the files asynchronously
var greet2 = fs.readFile(__dirname + '/greet.txt','utf8' , function(err, data) {
        console.log(data);
});
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Done~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');


