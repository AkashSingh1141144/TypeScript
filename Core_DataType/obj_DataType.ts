// Object DataType in TypeScript

const personObj : object = {
	name: "Akash",
	age: 25,
}
console.log(personObj);

// console.log(personObj.name); // Error: Property 'name' does not exist on type 'object'

interface Person1 {
	name: string;
	age: number;
}
const person1 : Person1 = {
	name: "Akash",
	age: 25,
}
console.log(person1.name);




const personObj2 : {name: string, age: number} = {
	name: "Akash",
	age: 25,
}
console.log(personObj2.name);
console.log(personObj2.age);





let car : {brand:string, model:string, price:number};

car = {
	brand: "Toyota",
	model: "Supra",
	price: 20000,
}


console.log(car);