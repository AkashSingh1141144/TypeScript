// Nested object in TypeScript

interface Address {
	city: string,
	state: string,
	country: string,
}

interface Person1 {
	name: string,
	age: number,
	address: Address,
}

const personA: Person1 = {
	name: "Sandhya Singh",
	age: 20,
	address: {
		city: "Ramnagar",
		state: "Uttarakhand",
		country: "India",
	}
}

console.log(personA);
console.log(`User Name: ${personA.name}, age ${personA.age}, Person Address ${personA.address.city}, ${personA.address.state}, ${personA.address.country}`);
