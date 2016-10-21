var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt','utf8');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function (chunk) {
    console.log(chunk);
    writable.write(chunk);
});

var readable1 = fs.createReadStream(__dirname + '/greet.txt','utf8');

var writable1 = fs.createWriteStream(__dirname + '/greetcopy1.txt');

readable1.pipe(writable1);