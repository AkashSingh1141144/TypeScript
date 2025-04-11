# Type_inference in TypeScript

type inference refers to the ability of the TypeScript compiler to automatically determine the type of a variable, function, or expression without the need for explicit type annotations. This feature makes TypeScript more concise and easier to use while still maintaining type safety.

How Type Inference Works
TypeScript analyzes the code and infers the type based on the value assigned to a variable or the return value of a function.

1. Variable Type Inference
When you declare a variable and assign a value, TypeScript infers the type based on the value.
```typescript
let name = "Akash"; // Inferred as string
let age = 23;       // Inferred as number
let isActive = true; // Inferred as boolean
```

2. Function Return Type Inference
When you define a function and return a value, TypeScript infers the return type based on the value returned.
```typescript
function add(a: number, b: number): number {
  return a + b;
}
```
In this example, TypeScript infers that the return type of the `add` function is `number` because the function returns the sum of two numbers.	


# When to Use Explicit Types
While type inference is powerful, there are cases where explicit type annotations are preferred:

When the inferred type is too generic (e.g., any).
When you want to provide additional clarity for other developers.
When working with complex types that TypeScript cannot infer.


# Types of Type inference 
-> Implicite Inference
-> Explitic Inference
-> Best Common Type
-> Contextual Typing
-> Return Type Inference
-> Type widening and Narrowing

