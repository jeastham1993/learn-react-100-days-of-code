console.log('---------------------- reference and primitive types -------------------')
// Numbers, strings, booleans are primitive types
// When a variable is stored in another variable it is copied
const number = 1;
const number2 = number;

console.log(number2);

// Arrays and objects are reference types
// Second person just stores a pointer to the original pointer
// Be very careful with reference types as you may unintentionally manipulate all instances
const person = {
    name:'James'
};

const secondPerson = person;

console.log(secondPerson);

person.name = 'John';

console.log(secondPerson); // will print John

// To get around reference types, you can use spread operator
const mySpreadPerson = {
    ... person
};

person.name = 'Colin';

console.log(mySpreadPerson); // will print John