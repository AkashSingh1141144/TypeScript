// Return Type Inference 
// If a function has a return statement, TypeScript will infer the return type:

function add(x: number, y: number) {
	return x + y; // inferred as number
  }
const result = add(5, 10); // result is inferred as number
console.log(`result: ${result}, type: ${typeof result}`); // result: 15, type: number  