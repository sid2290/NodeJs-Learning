function Greetr() {
    this.greeting = 'Hello World!';
}

Greetr.prototype.greet = function() {
    console.log(this.greeting);
    this.emit('greet');
}
module.exports = Greetr;