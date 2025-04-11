// Object Array in TypeScript 

const arrObject : { name: string, age: number,city: string, userPassword:(string | number) }[] = [
	{name : "Sandhya", age : 20, city : "Mirzapur", userPassword : "Akash@123"},
	{name : "Akash", age : 23, city : "Mirzapur", userPassword : 1234586},
];

console.log(`User Object Array: ${arrObject}`);
console.log(`User Object Array: ${arrObject[0].name}, ${arrObject[0].age}, ${arrObject[0].city}, ${arrObject[0].userPassword}`);
console.log(`User Object Array: ${arrObject[1].name}, ${arrObject[1].age}, ${arrObject[1].city}, ${arrObject[1].userPassword}`);