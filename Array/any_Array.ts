// Any Type Array in TypeScript

const AnyTypeArray: any[] = ["Hello", 1, true, null, undefined, { name: "John" }, [1, 2, 3]];
const AnyTypeArray2: any[] = [1, 2, 3, 4, 5, "Hello", true, null, undefined, { name: "John" }, [1, 2, 3]];

console.log(AnyTypeArray);
console.log(AnyTypeArray2);
console.log(AnyTypeArray[0]); // Hello
console.log(AnyTypeArray[1]); // 1
console.log(AnyTypeArray[2]); // true
