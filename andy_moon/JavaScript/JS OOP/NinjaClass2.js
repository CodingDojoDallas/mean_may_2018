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
    sake = 10;
    this.health += sake;
    console.log("Health: " + (this.health));
    console.log("------------------");
  };
}
  Ninja.prototype.punch = function(){
  console.log(blueNinja.name + " has " + this.health + " health.");
  console.log(blueNinja.name + " was punched by " + redNinja.name + " and lost 5 health!");
  punched = -5;
  this.health += punched;
  console.log(blueNinja.name + " now has " + this.health + " health.");
  console.log("------------------");

};

Ninja.prototype.kick = function(){
  console.log(redNinja.name + " has " + this.health + " health.");
  console.log(redNinja.name + " was kicked by " + blueNinja.name + " and lost 15 health!");
  kicked = -15;
  this.health += kicked;
  console.log(redNinja.name + " now has " + this.health + " health.");
  console.log("------------------");

};
var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);



