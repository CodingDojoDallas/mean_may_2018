function Ninja(name) {
  this.name = name;
  this.health = 100;
  var speed = 3;
  var strength = 3;
  this.sayName = function(){
    console.log("My ninja is " + this.name);
  };
  this.showStats = function(){
    console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
  };
  this.drinkSake = function(){
    console.log("Health: " + (this.health + 10));
  };
  }
var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
var ninja1 = new Ninja("Hyabusa");
ninja1.showStats();
var ninja1 = new Ninja("Hyabusa");
ninja1.drinkSake();