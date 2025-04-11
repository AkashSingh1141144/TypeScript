// Type Biden and Narrowing 

// This is a bit more advanced. When you assign a literal value, TypeScript first widens the type unless you lock it with as const.

let greeting = "Hello"; // TypeScript infers the type as string(widened type)
const greetingConst = "Hello"; // TypeScript infers the type as "Hello"(literal type)

let number = 42; // TypeScript infers the type as number(widened type)
const numberConst = 42; // TypeScript infers the type as 42(literal type)

const status1 = { message: "success" } as const;
// message: "success" (not just string)


console.log(`greeting: ${greeting}, type: ${typeof greeting}`); // greeting: Hello, type: string
console.log(`greetingConst: ${greetingConst}, type: ${typeof greetingConst}`); // greetingConst: Hello, type: string
console.log(`number: ${number}, type: ${typeof number}`); // number: 42, type: number
console.log(`numberConst: ${numberConst}, type: ${typeof numberConst}`); // numberConst: 42, type: number
console.log(`status1: ${status1}, type: ${typeof status1}`); // status1: [object Object], type: object
