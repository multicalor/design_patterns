// Prototype

class TeslaCar {
    constructor(model, price, interior, autopilot){
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.autopilot = autopilot;
    }

    prodece() {
        return new TeslaCar (this.model, this.price, this.interior, this.autopilot)
    }
}

const prototypeCar = new TeslaCar('S', 20000, 'black', false)

const car1 = prototypeCar.prodece();
const car2 = prototypeCar.prodece();
const car3 = prototypeCar.prodece();

console.log(car1)
console.log(car2)
console.log(car3)

car1.interior = 'white'
car1.autopilot = true

console.log(car1)


