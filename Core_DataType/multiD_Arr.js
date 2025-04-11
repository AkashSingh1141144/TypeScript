// MultiDimensional Array in TypeScript
var multiDArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var multiDArray2 = [
    ["Akash", "Singh"],
    ["Sandhya", "Kumar"],
    ["Sakshi", "Kumar"]
];
var multiDArray3 = [
    [1, 2, 3],
    ["Akash", "Singh"],
    [7, 8, 9]
];
var multiDArray4 = [
    [
        [1, 2, 3],
        ["Akash", "Singh"],
        [7, 8, 9]
    ],
    [
        [1, 2, 3],
        ["Akash", "Singh"],
        [7, 8, 9]
    ]
];
console.log("MultiDimensional Array: ".concat(multiDArray));
console.log("MultiDimensional Array: ".concat(multiDArray2));
console.log("MultiDimensional Array: ".concat(multiDArray3));
console.log("MultiDimensional Array: ".concat(multiDArray4));
console.log("MultiDimensional Array: ".concat(multiDArray[0][0]));
console.log("MultiDimensional Array: ".concat(multiDArray[0][1]));
console.log("MultiDimensional Array: ".concat(multiDArray[0][2]));
console.log("MultiDimensional Array: ".concat(multiDArray[1][0]));
console.log("MultiDimensional Array: ".concat(multiDArray[1][1]));
console.log("MultiDimensional Array: ".concat(multiDArray[1][2]));
