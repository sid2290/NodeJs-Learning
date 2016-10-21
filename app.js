
//buffers in node
var buf = new Buffer('Hello','utf8');

console.log(buf);

// ES6 gives the way to deal with buffer
var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);

view[0] = 5;
view[1] = 15;

console.log(view);




