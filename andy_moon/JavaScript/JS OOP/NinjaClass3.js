class Ninja {
  constructor(name, health, speed, strength){
  this.name = name;
  this.health = 100;
  this.speed = 3;
  this.strength = 3;
  }
  sayName(){
    console.log(`My ninja name is ${this.name}`);
  }
  showStats(){
  console.log(`Name: ${this.name} , Health: ${this.health} , Speed: ${this.speed} , Strength: ${this.strength}`);
  }
  drinkSake(){
    console.log(`Before Sake: Health = ${this.health}`);
    this.health += 10;
    console.log(`After Sake: Health = ${this.health}`);
    console.log("------------------");
  }
}
class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom) {
      super(name);
      this.health = 200;
      this.speed = 10;
      this.strength = 10;
      this.wisdom = 10;
    }
    speakWisdom(){
      super.drinkSake();
      super.showStats();
      console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const name1 = new Ninja("Hyabusa");
name1.sayName();
name1.showStats();
name1.drinkSake();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
