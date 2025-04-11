// Best Common Type Inference
// When inferring types from multiple values, like in an array, TypeScript tries to find the best common type.

let values = [10, "Hello", true]; // TypeScript infers the type as (string | number | boolean)[]
let mixedArray1 = [1, "two", 3.0, false]; // TypeScript infers the type as (string | number | boolean)[]
let arr = [1, 2, 3]; // TypeScript infers the type as number[]

console.log(`values: ${values}, type: ${typeof values}`);
console.log(`mixedArray1: ${mixedArray1}, type: ${typeof mixedArray1}`);
console.log(`arr: ${arr}, type: ${typeof arr}`);
// The best common type is the most specific type that can represent all the values in the array.
