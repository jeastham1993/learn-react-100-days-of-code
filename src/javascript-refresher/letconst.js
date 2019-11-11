console.log('---------------------- let const -------------------')

// @ts-check

// Can use different things to declare variables
var name = 'James';
console.log(name);

// However in ES6 let/const should be used instead
let newVariable = '';
const constantVariable = 'myconstant';

// Const is for constants, let is for things that are actually variable

constantVariable = 'this will throw an error'