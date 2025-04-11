// Best Common Type Inference
// When inferring types from multiple values, like in an array, TypeScript tries to find the best common type.
var values = [10, "Hello", true]; // TypeScript infers the type as (string | number | boolean)[]
var mixedArray1 = [1, "two", 3.0, false]; // TypeScript infers the type as (string | number | boolean)[]
var arr = [1, 2, 3]; // TypeScript infers the type as number[]
console.log("values: ".concat(values, ", type: ").concat(typeof values));
console.log("mixedArray1: ".concat(mixedArray1, ", type: ").concat(typeof mixedArray1));
console.log("arr: ".concat(arr, ", type: ").concat(typeof arr));
// The best common type is the most specific type that can represent all the values in the array.
