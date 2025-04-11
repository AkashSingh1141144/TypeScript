// MultiDimensional Array in TypeScript
const multiDArray: number[][] = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]

const multiDArray2: string[][] = [
	["Akash", "Singh"],
	["Sandhya", "Kumar"],
	["Sakshi", "Kumar"]
]

const multiDArray3: (number | string)[][] = [
	[1, 2, 3],
	["Akash", "Singh"],
	[7, 8, 9]
]
const multiDArray4: (number | string)[][][] = [
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
	
]


console.log(`MultiDimensional Array: ${multiDArray}`);
console.log(`MultiDimensional Array: ${multiDArray2}`);
console.log(`MultiDimensional Array: ${multiDArray3}`);
console.log(`MultiDimensional Array: ${multiDArray4}`);
console.log(`MultiDimensional Array: ${multiDArray[0][0]}`);
console.log(`MultiDimensional Array: ${multiDArray[0][1]}`);
console.log(`MultiDimensional Array: ${multiDArray[0][2]}`);
console.log(`MultiDimensional Array: ${multiDArray[1][0]}`);
console.log(`MultiDimensional Array: ${multiDArray[1][1]}`);
console.log(`MultiDimensional Array: ${multiDArray[1][2]}`);