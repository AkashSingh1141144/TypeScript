// Enum in TypeScript

enum Direction {
	Up = 1,
	Down,
	Left,
	Right
}

console.log(Direction.Up); // 1
console.log(Direction[1]); // Up
console.log(Direction.Down); // 2
console.log(Direction[2]); // Down
console.log(Direction.Left); // 3
console.log(Direction[3]); // Left
console.log(Direction.Right); // 4
console.log(Direction[4]); // Right