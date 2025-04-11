interface Personname {
	firstName: string;
	lastName: string;
	age: number;
	email: string;
}

let personName : Personname = {
	firstName: "Sandhya",
	lastName: "Akash Singh",
	age: 30,
	email: "sandhya.singh@example.com"
}

console.log(personName);
console.log(personName.firstName); // John
console.log(personName.lastName); // Doe
console.log(personName.age); // 30
console.log(personName.email); // john.doe@example.com


