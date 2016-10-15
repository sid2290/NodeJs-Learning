// replacing module.exports object with my own object
function Greetr() {
    this.greeting = 'Hello World!!';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();