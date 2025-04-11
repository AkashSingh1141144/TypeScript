// Function Union 
function printValue(value) {
    if (typeof value === 'number') {
        console.log("The number is: ".concat(value));
    }
    else if (typeof value === 'string') {
        console.log("The string is: ".concat(value));
    }
}
printValue(2023); // The number is: 2023
printValue('BMW M4'); // The string is: BMW M4
