//1. Setting types
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?

// we need string so,
// myString = "9";
myString = "9";


//2. Setting the types for function parameters
function sayHello(name: string){
   return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"

// 9 is number. we need string "9"
console.log(sayHello("9"));


//3. Optional parameters
function fullName(firstName: string, lastName: string, middleName: string){
   let fullName = `${firstName} ${middleName} ${lastName}`;
   return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?

// we need empty string """"
console.log(fullName("Jimbo", "", "Jones"));

//4. Interfaces and function parameters
interface Student {
   firstName: string;
   lastName: string;
   belts: number;
}
function graduate(ninja: Student){
   return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
   firstName: "Christine",
   lastName: "Yang",
   belts: 2
}
const jay = {
   firstName: "Jay",
   lastName: "Patel",
   belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:

// need "s" after blet in line 17
console.log(graduate(jay));


//5. Classes and function parameters
class Ninja {
   fullName: string;
   constructor(
      public firstName: string,
      public lastName: string){
         this.fullName = `${firstName} ${lastName}`;
    }
      //Methode //need to use ``and ${this.fullname}
   debug(){
      console.log(`${this.fullName} is my friend.`)
   }
}
// setting up shane as a Ninja

const shane = new Ninja("Derek", "Han");
shane.debug();

function study(programmer: Ninja) {
    
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}

//constructor needs two arguments!
const turing = new Ninja("Alan", "Turing");

console.log(study(turing));


//6. Arrow functions
var increment = x => x + 1;

console.log(increment(3));
//without {}: or with return value
var square = x => {
    let y =x * x;
    return y;
};

// This is not showing me what I want:
console.log(square(4));

// with ()
var multiply = (x, y) => x * y;

console.log(multiply(3, 4));

// with {}
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}
console.log(math(3, 4));

//7. Arrow functions and 'this'

class Elephant {
    private age: number;
    constructor(age: number) {
        this.age = age;
    }
    private printAge(): void {
        console.log(this.age++);
    };
    public repeatAge(): void {
        
        let intervalo = setInterval(() => this.printAge(), 2000);
        setTimeout(function() {
            clearInterval(intervalo);
        }, 40000);
    }
}

let test: Elephant;
test = new Elephant(8);
test.repeatAge();





