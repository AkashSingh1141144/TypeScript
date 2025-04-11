// Nested object in TypeScript
var personA = {
    name: "Sandhya Singh",
    age: 20,
    address: {
        city: "Ramnagar",
        state: "Uttarakhand",
        country: "India",
    }
};
console.log(personA);
console.log("User Name: ".concat(personA.name, ", age ").concat(personA.age, ", Person Address ").concat(personA.address.city, ", ").concat(personA.address.state, ", ").concat(personA.address.country));
