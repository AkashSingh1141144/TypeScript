// Return Type Inference 
// If a function has a return statement, TypeScript will infer the return type:
function add(x, y) {
    return x + y; // inferred as number
}
var result = add(5, 10); // result is inferred as number
console.log("result: ".concat(result, ", type: ").concat(typeof result)); // result: 15, type: number  
