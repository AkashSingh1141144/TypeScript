// Type Biden and Narrowing 
// This is a bit more advanced. When you assign a literal value, TypeScript first widens the type unless you lock it with as const.
var greeting = "Hello"; // TypeScript infers the type as string(widened type)
var greetingConst = "Hello"; // TypeScript infers the type as "Hello"(literal type)
var number = 42; // TypeScript infers the type as number(widened type)
var numberConst = 42; // TypeScript infers the type as 42(literal type)
var status1 = { message: "success" };
// message: "success" (not just string)
console.log("greeting: ".concat(greeting, ", type: ").concat(typeof greeting)); // greeting: Hello, type: string
console.log("greetingConst: ".concat(greetingConst, ", type: ").concat(typeof greetingConst)); // greetingConst: Hello, type: string
console.log("number: ".concat(number, ", type: ").concat(typeof number)); // number: 42, type: number
console.log("numberConst: ".concat(numberConst, ", type: ").concat(typeof numberConst)); // numberConst: 42, type: number
console.log("status1: ".concat(status1, ", type: ").concat(typeof status1)); // status1: [object Object], type: object
