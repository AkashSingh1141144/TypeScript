# Object in TypeScript
In TypeScript, an object is a collection of properties, where each property is an association between a key (name) and a value. Objects can store values of various types, including primitive values, other objects, or functions.

# Declaring Objects in TypeScript
1. Using Inline Type Annotations

let person: { name: string; age: number; isActive: boolean } = {
    name: "Akash",
    age: 23,
    isActive: true,
};
console.log(person.name); // Output: Akash


2. Using Interfaces

interface Person {
    name: string;
    age: number;
    isActive: boolean;
}

let person: Person = {
    name: "Akash",
    age: 23,
    isActive: true,
};


3. Using Type Aliases
type Person = {
    name: string;
    age: number;
    isActive: boolean;
};

let person: Person = {
    name: "Akash",
    age: 23,
    isActive: true,
};