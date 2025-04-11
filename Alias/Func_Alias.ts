type addNum = (a: number, b: number) => number; // function type alias
const add1: addNum = (a, b) => a + b; // function implementation
console.log(add1(10, 20)); // 30
