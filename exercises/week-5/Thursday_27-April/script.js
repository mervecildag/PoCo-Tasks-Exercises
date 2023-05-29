// Objects
const oneCar =  {
    brand: "Mazda",
    model: "3",
    color: "grey",
    fuel: "Diesel",
    doors: 4,
    years: 2005,
    checkTankAmount: function () {
        console.log("You need to drive to the next gas station.")
    }
}

car.checkTankAmount();


//object constructor
function CarOC(brand, model, color, fuel, doors, year){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.fuel = fuel;
    this.doors = doors;
    this.year = year;
    this.checkTankAmount = function () {
        console.log(`You need to drive to the next gas station with your ${this.brand} ${this.model}.`)
    }
}



//create instance
let sussannesCar = new CarOC("Mazda","3","grey","Diesel",4,2005);
console.log(sussannesCar);


//class vehicle - car, motorcycle, truck, plane, ship, bicycle

class Vehicle {
    constructor(brand, model, color, year){
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
    }
}

class Car extends Vehicle {
    constructor(brand, model, color, year, fuel, doors){
        super(brand, model, color, year); // it should be in the same order
        this.fuel = fuel;
        this.doors = doors;
    }
    checkTankAmount = function () {
        console.log(`Hey,you need to drive to the next gas station with your ${this.brand} ${this.model}.`)
    }
}

let mustafasCar = new Car ("Ford","Fiesta","white","Petrol",2,1990)

//constructor(brand, model, color,year,fuel, doors) {
//   super(brand,model,year,color)