// Hetorogeneous Enum
var mixEnum;
(function (mixEnum) {
    mixEnum[mixEnum["number"] = 1] = "number";
    mixEnum["string"] = "string";
    mixEnum[mixEnum["false"] = 0] = "false";
})(mixEnum || (mixEnum = {}));
console.log(mixEnum.number); // 1
console.log(mixEnum.string); // string
console.log(mixEnum.false); // 0
