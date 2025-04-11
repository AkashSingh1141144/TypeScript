// Enum in TypeScript
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up); // 1
console.log(Direction[1]); // Up
console.log(Direction.Down); // 2
console.log(Direction[2]); // Down
console.log(Direction.Left); // 3
console.log(Direction[3]); // Left
console.log(Direction.Right); // 4
console.log(Direction[4]); // Right
