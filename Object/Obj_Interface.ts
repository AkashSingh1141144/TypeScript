// Declaration of Object using Interface 

interface ObjectInterface {
	name: string,
	age: number,
	isActive: boolean,
}

const objectInterface : ObjectInterface = {
	name: "Akash Singh",
	age: 20,
	isActive: true
} 

console.log(objectInterface);
console.log(`User Name: ${objectInterface.name}, age ${objectInterface.age}, isActive ${objectInterface.isActive}`);
