// Declaration of Object using Type Alias
var objectAlias = {
    name: "Akash Singh",
    age: 20,
    isActive: true,
    lover: "Sandhya"
};
var objectAlias1 = {
    name: "Sandhya Singh",
    age: 20,
    isActive: true,
    lover: "Akash Singh"
};
console.log(objectAlias);
console.log("User Name: ".concat(objectAlias.name, ", age ").concat(objectAlias.age, ", isActive ").concat(objectAlias.isActive, ", Person lover ").concat(objectAlias.lover));
console.log(objectAlias1);
console.log("User Name ".concat(objectAlias1.name, ", age ").concat(objectAlias1.age, ", isActive ").concat(objectAlias1.isActive, ", Person lover ").concat(objectAlias1.lover));
