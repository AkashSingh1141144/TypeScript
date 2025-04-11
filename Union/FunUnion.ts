// Function Union 

function printValue(value: number | string) :void {
	if(typeof value === 'number') {
		console.log(`The number is: ${value}`);
	}
	else if(typeof value === 'string') {
		console.log(`The string is: ${value}`);
	}
}

printValue(2023); // The number is: 2023
printValue('BMW M4'); // The string is: BMW M4