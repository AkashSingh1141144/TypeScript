// Enum ( enumeration) Datatype in  TypeScript
//   an enum (short for "enumeration") is a special data type that allows you to define a set of named constants. Enums are useful when you have a fixed set of related values, such as days of the week, directions, or user roles. Enums can be numeric or string-based.

//   Numeric Enums: By default, enums are numeric and start from 0. You can also manually assign values to the enum members.
//   String Enums: Enums can also be string-based, where each member is assigned a string value. String enums do not auto-increment like numeric enums.
//   Heterogeneous Enums: Enums can contain both string and numeric values, but this is not a common practice and is generally discouraged for better readability and maintainability.


enum Direction {
	North, // 0
	East, // 1
	South, // 2
	West // 3
}

console.log(Direction.North); // Output: 0
console.log(Direction.East); // Output: 1			
console.log(Direction.South); // Output: 2
console.log(Direction.West); // Output: 3


enum Status {
	Active = 1,
	Inactive = 0,
	Pending = -1
}

console.log(Status.Active); // Output: 1
console.log(Status.Inactive); // Output: 0
console.log(Status.Pending); // Output: -1

// ==============================================
// String Enums
enum Color {
	Red = "RED",
	Green = "GREEN",
	Blue = "BLUE"
}
console.log(Color.Red); // Output: "RED"
console.log(Color.Green); // Output: "GREEN"
console.log(Color.Blue); // Output: "BLUE"


// ==============================================
// Heterogeneous Enums
enum UserRoles {
	Admin = "ADMIN",
	Manager = "MANAGER",
	Employee = 1
}

console.log(UserRoles.Admin); // Output: "ADMIN"
console.log(UserRoles.Manager); // Output: "MANAGER"
console.log(UserRoles.Employee); // Output: 1