console.log('---------------------- spread rest -------------------')
// Spread splits up array elements or object properties
const oldArray = [1, 2, 3, 4, 5]

// This will create a new array starting with 1,2,3,4,5 and then adding 4,5,6
const newArray = [...oldArray, 6, 7, 8];
console.log(newArray);

class OldObject {
    name = 'James';
}

var myOldObject = new OldObject();

// newObject will have two properties, name (from oldObject) and gender
const newObject = {
    ...myOldObject,
    gender: 'male'
};

console.log(newObject);

// Rest used to merge a list of function arguments into an array
function sortArgs(...args){
    return args.sort();
}

console.log(sortArgs(9,7,5,0,9,1,3,5));