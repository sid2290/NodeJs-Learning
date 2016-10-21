function Person () {
    this.firstname = "sid";
    this.lastname = "narang";
}

Person.prototype.greet = function () {
    
    console.log('Hello' + ':' + this.firstname + ' ' + this.lastname );
}

module.exports = Person;
