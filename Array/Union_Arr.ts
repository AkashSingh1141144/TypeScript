// Union Type Array in TypeScript
// A union type in TypeScript allows a variable to be more than one type. It is a way to define a variable that can hold multiple types.

let UnionTypeArray : (string | number | boolean)[] = ["Hello", 123, true];

UnionTypeArray.push("World");

let UnionTypeArray2 : (string | number | boolean)[] = [1, 2, 3, "Hello", true,];


console.log(UnionTypeArray);
console.log(UnionTypeArray2);