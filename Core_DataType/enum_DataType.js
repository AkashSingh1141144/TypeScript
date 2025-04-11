// Enum ( enumeration) Datatype in  TypeScript
//   an enum (short for "enumeration") is a special data type that allows you to define a set of named constants. Enums are useful when you have a fixed set of related values, such as days of the week, directions, or user roles. Enums can be numeric or string-based.
//   Numeric Enums: By default, enums are numeric and start from 0. You can also manually assign values to the enum members.
//   String Enums: Enums can also be string-based, where each member is assigned a string value. String enums do not auto-increment like numeric enums.
//   Heterogeneous Enums: Enums can contain both string and numeric values, but this is not a common practice and is generally discouraged for better readability and maintainability.
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West"; // 3
})(Direction || (Direction = {}));
console.log(Direction.North); // Output: 0
console.log(Direction.East); // Output: 1			
console.log(Direction.South); // Output: 2
console.log(Direction.West); // Output: 3
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Inactive"] = 0] = "Inactive";
    Status[Status["Pending"] = -1] = "Pending";
})(Status || (Status = {}));
console.log(Status.Active); // Output: 1
console.log(Status.Inactive); // Output: 0
console.log(Status.Pending); // Output: -1
// ==============================================
// String Enums
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
console.log(Color.Red); // Output: "RED"
console.log(Color.Green); // Output: "GREEN"
console.log(Color.Blue); // Output: "BLUE"
// ==============================================
// Heterogeneous Enums
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "ADMIN";
    UserRoles["Manager"] = "MANAGER";
    UserRoles[UserRoles["Employee"] = 1] = "Employee";
})(UserRoles || (UserRoles = {}));
console.log(UserRoles.Admin); // Output: "ADMIN"
console.log(UserRoles.Manager); // Output: "MANAGER"
console.log(UserRoles.Employee); // Output: 1
