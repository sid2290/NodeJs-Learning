var person = require('./person')

function Policeman (badgenumber) {
    person.call(this);
    this.badgenumber = badgenumber;
}

Policeman.prototype.greet = function () {
    console.log("Hello : " + this.firstname + " " + this.lastname + ", your badge number is : " 
    + this.badgenumber)
}

module.exports = Policeman;