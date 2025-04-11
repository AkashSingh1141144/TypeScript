# Interface in TypeScript
In TypeScript, an interface is a way to define the structure of an object. It is used to specify the shape of an object, including its properties, their types, and optional or readonly modifiers. Interfaces are a powerful feature for ensuring type safety and improving code readability.
## Example
```typescript
interface Person {
  name: string;
  age: number;
  address?: string;
  readonly id: number;
}

const person: Person = {
  name: "John",
  age: 30,
  address: "123 Main St",
  id: 1
};

person.name = "Jane"; // OK
person.age = 31; // OK
person.address = "456 Elm St"; // OK
person.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
```