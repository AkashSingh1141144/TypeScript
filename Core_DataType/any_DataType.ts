// Any Data Type in TypeScript
// the any data type is a special type that allows a variable to hold a value of any type. It effectively disables type checking for that variable, making it useful in scenarios where the type of a value is not known during development or when migrating JavaScript code to TypeScript.

let anyVariable: any; 
anyVariable = 42; // number
anyVariable = "Hello"; // string
anyVariable = true; // boolean
anyVariable = { name: "John", age: 30 }; // object
anyVariable = [1, 2, 3]; // array

console.log(`Any Variable: ${anyVariable}`); // Output: Any Variable: [1, 2, 3]




// In the example above, the variable anyVariable is declared with the any type. It can hold values of any type, including numbers, strings, booleans, and objects. This flexibility allows for more dynamic code, but it also means that TypeScript will not provide type checking for this variable.	