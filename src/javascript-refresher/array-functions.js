console.log('---------------------- array functions -------------------')
const numbers = [1, 2, 3];

// Let's say we want to double each number in the array
// map is an array function, the function provided gets executed on each item
const doubledNumbersArray = numbers.map((num) => {
    return num * 2;
});

console.log(numbers);
console.log(doubledNumbersArray);