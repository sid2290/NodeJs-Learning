var greeting = 'Hello world';

// passing the function constructor directly
function greet() {
        console.log(greeting);
}

module.exports = {
    greet: greet   
    }
    console.log(module.exports);
    console.log(exports);