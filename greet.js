// passing the function constructor directly
function Greetr() {
    this.greeting = 'Hello World!!';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr;