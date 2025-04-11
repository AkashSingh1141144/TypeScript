// String Enum 
var Color;
(function (Color) {
    Color["red"] = "RED";
    Color["green"] = "GREEN";
    Color["blue"] = "BLUE";
    Color["yellow"] = "YELLOW";
    Color["orange"] = "ORANGE";
    Color["purple"] = "PURPLE";
})(Color || (Color = {}));
console.log(Color.red); // RED
console.log(Color.green); // GREEN
console.log(Color.blue); // BLUE
console.log(Color.yellow); // YELLOW
console.log(Color.orange); // ORANGE
