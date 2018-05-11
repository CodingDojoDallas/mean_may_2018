class Bike {
    price: number;
    max_speed: string;
    miles: number;
    constructor(price, max_speed) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    displayInfo() {
        console.log(`The price is ${this.price}, the max speed is ${this.max_speed}, and the miles is ${this.miles}.`);
    }
    ride() {
        console.log('Riding!');
        this.miles += 10;
        return this;
    }
    reverse() {
        console.log('Reversing!');
        if (this.miles >= 5) {
            this.miles -= 5;
            return this;
        }
        else {
            this.miles = 0;
            return this;
        }
    }
}

let bike1 = new Bike(200, '25 mph');
bike1.ride().ride().ride().reverse().displayInfo();

let bike2 = new Bike(150, '15 mph');
bike2.ride().ride().reverse().reverse().displayInfo();

let bike3 = new Bike(350, '40 mph');
bike3.reverse().reverse().reverse().displayInfo();