var greeting = 'Hello world';

// passing the function constructor directly
function greet() {
        console.log(greeting);
}

exports = {
    greet: greet   
    }

console.log(exports);
console.log(module.exports);