console.log('---------------------- arrow functions -------------------')
// Arrow functions are a syntax for creating javascript functions
// a list of variables can be held in the brackets and then the body of the function
const printMyName = (firstName, lastName) => {
    console.log(firstName);
    console.log(lastName)
}

printMyName('normal function james', 'eastham');

// For a single line function body the curly braces can be removed
const multiply = (number) => number * 2;

console.log(multiply(2));
