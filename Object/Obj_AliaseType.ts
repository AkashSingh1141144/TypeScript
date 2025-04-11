// Declaration of Object using Type Alias

type ObjectAlias ={
	name: string,
	age: number,
	isActive: boolean,
	lover: string
}

const objectAlias : ObjectAlias = {
	name: "Akash Singh",
	age: 20,
	isActive: true,
	lover: "Sandhya"
}
const objectAlias1 : ObjectAlias = {
	name: "Sandhya Singh",
	age: 20,
	isActive: true,
	lover : "Akash Singh"
}

console.log(objectAlias);
console.log(`User Name: ${objectAlias.name}, age ${objectAlias.age}, isActive ${objectAlias.isActive}, Person lover ${objectAlias.lover}`);

console.log(objectAlias1);
console.log(`User Name ${objectAlias1.name}, age ${objectAlias1.age}, isActive ${objectAlias1.isActive}, Person lover ${objectAlias1.lover}`);

