// Numeric Enum
var Car;
(function (Car) {
    Car[Car["BMW"] = 1] = "BMW";
    Car[Car["Mercedes"] = 2] = "Mercedes";
    Car[Car["Audi"] = 3] = "Audi";
    Car[Car["Porsche"] = 4] = "Porsche";
    Car[Car["Tesla"] = 5] = "Tesla";
    Car[Car["Volkswagen"] = 6] = "Volkswagen";
    Car[Car["Ford"] = 7] = "Ford";
})(Car || (Car = {}));
console.log(Car.BMW); // 1
console.log(Car.Mercedes); // 2
console.log(Car.Audi); // 3
console.log(Car.Porsche); // 4
console.log(Car.Tesla); // 5
console.log(Car.Volkswagen); // 6
console.log(Car.Ford); // 7
console.log(Car[1]); // BMW
console.log(Car[2]); // Mercedes
