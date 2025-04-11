// Tuple in TypeScript
// Tuple is a special type of array that can hold a fixed number of elements of different types. It is useful when you know the number of elements and their types in advance.

const person : [string, number, boolean] = ["Akash", 21, true];
const person2 : [string, number, boolean] = ["Sandhya", 20, false]

console.log(`Person: ${person}`);
console.log(`Person2: ${person2}`);
console.log(`Person Name: ${person[0].toUpperCase()}`);
console.log(`Person Age: ${person[1]}`);


// Better Readbility of Tuple 
type Person = [string, number, boolean]; // type alias for tuple
const person3 : Person = ["Akash", 21, true];
const person4 : Person = ["Sandhya", 20, false]
const person5 : Person = ["Sakshi", 22, true]
const person6 : Person = ["Madhuri", 21, true];

console.log(`Person3: ${person3}`);
console.log(`Person4: ${person4}`);	
console.log(`Person5: ${person5}`);
console.log(`Person6: ${person6}`);
