function Ninja(name) {
  this.name = name;
  var health = 100;
  var speed = 3;
  var strength = 3;

  ninja.sayName = function(){
    console.log("My ninja is " + this.name);
  } 
return Ninja;
  };
var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();










  // 'Getter' functions help us read private variables
  this.readOdometer = function () {
    return odometer;
  }

  // 'Setter' functions help us update private variables
  this.drive = function (distance) {
    updateOdometer(distance);
    // return this will allow us to chain methods
    return this;
  }
}
var myCarInstance = new Car("Chevy", "Camaro");
// by returning this, we can chain drive()
myCarInstance.drive(50).drive(90);
// private variable is undefined
console.log(myCarInstance.odometer);
// but we can read it with our getter function
console.log(myCarInstance.readOdometer());
