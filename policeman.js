var person = require ('./person');

class policeman extends person {
    constructor(badgenumber) {
        super();
        this.badgenumber = badgenumber;
    }
}



module.exports = policeman;