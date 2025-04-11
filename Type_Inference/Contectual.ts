// Contectual typing
// Type is inferred based on the context in which a value is used (typically with functions, callbacks, event handlers, etc.).

export function add(a:number, b: number) {
    return a + b;
}
const sum = add(5, 10); // TypeScript infers the type of sum as number
console.log(`sum: ${sum}, type: ${typeof sum}`); // sum: 15, type: number

// In this example, the type of the sum variable is inferred based on the return type of the add function. TypeScript looks at the function signature and determines that the return type of add is number, so it infers that sum is also of type number.


const numbers1 = [1, 2, 3, 4, 5]; // TypeScript infers the type as number[]
numbers1.push(6); // TypeScript infers the type of 6 as number
console.log(`numbers1: ${numbers1}, type: ${typeof numbers1}`); // numbers1: 1,2,3,4,5,6, type: object
//numbers1.push("7"); //  Error: Argument of type 'string' is not assignable to parameter of type 'number'.