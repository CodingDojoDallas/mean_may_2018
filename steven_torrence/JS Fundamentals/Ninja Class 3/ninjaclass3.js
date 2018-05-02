class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log("My name is " + this.name);
    }
    showStats(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength); 
    }
    drinkSake(){
        this.health += 10;
    }
}

const steven = new Ninja('Steven');

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("A blind person who sees is better than a seeing person who is blind...")
    }
}

const dojo = new Sensei('Dojo');
// dojo.showStats();
// dojo.speakWisdom();
// dojo.showStats();