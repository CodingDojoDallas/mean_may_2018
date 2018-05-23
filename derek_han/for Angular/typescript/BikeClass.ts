class Bike {
    mile: number;
    constructor(public price: number, public max_speed: string) {
        this.mile = 0;
    }
    ride = () => {
        this.mile += 10;
        return this;
    }
    reverse = () => {
        this.mile -= 5;
        return this;
    }
    displayInfo = (price, max_speed) => {
        console.log("Price: " + price, "Max Speed: " + max_speed, "Miles: " + this.mile);
        this.mile = 0;
        return this;
    }
}



let bike1 = new Bike(200, "25mph");
bike1.ride().ride().ride().reverse().displayInfo(200, "25mph");

let bike2 = new Bike(200, "25mph");
bike2.ride().ride().reverse().reverse().displayInfo(400, "40mph");

let bike3 = new Bike(200, "25mph");
bike3.reverse().reverse().reverse().displayInfo(100, "15mph");