function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function(){
        console.log("My name is " + this.name);
    }
    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    }
    this.drinkSake = function(){
        this.health += 10;
    }
    this.punch = function(obj){
        if(obj instanceof Ninja){
            obj.health -= 5;
            console.log(obj.name + " was punched by " + this.name + " and lost 5 health!");
        }
        else{
            console.log(obj.name + "'s not a ninja!")
        }
    }
    this.kick = function(obj){
        if(obj instanceof Ninja){
            obj.health -= (15 * strength);
            console.log(obj.name + " was kicked by " + this.name + " and lost " + (15 * strength) + " health!");
        }
        else{
            console.log(obj.name + "'s not a ninja!")
        }
    }
}

var steven = new Ninja('Steven');
var derek = new Ninja('Derek');

function FakeNinja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
}

var mike = new FakeNinja('Mike')