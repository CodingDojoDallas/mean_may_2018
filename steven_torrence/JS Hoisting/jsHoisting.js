// **********GIVEN #1**********
console.log(hello);
var hello = 'world';
//__________RESULT 1__________
var hello;
console.log(hello); //logs undefined
hello = 'world';
//undefined


//**********GIVEN #2**********
var needle = 'haystack';
test();

//__________RESULT #2__________
var needle = 'haystack'; //Outside of function's scope. Will not affect function's needle.
function test() {
    var needle = 'magnet';
    console.log(needle);
}
test(); //It's okay for this to be called before setting the function. The function will be hoisted up.

//magnet


//**********GIVEN #3**********
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//__________RESULT #3__________
var brendan = 'super cool';
function print() { //This function never gets called
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); //Since the function was never called, it will take the outside scope of the variable
//super cool


//**********GIVEN #4**********
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//__________RESULT #4__________
var food = 'chicken';
function eat() {
    var food = 'gone'; // This get hoisted to the top of the function
    food = 'half-chicken'; //This sets the value to go from 'gone' to  half-chicken after it's been hoisted
    console.log(food);
}
console.log(food); // Will log chicken since it is defined above
eat();
//chicken
//half-chicken


//**********GIVEN #5**********
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//__________RESULT #5__________
mean();
console.log(food); //undefined
var mean = function () { //I'm not sure you can do this after calling the function. This would be different than if you didn't define the function normally. This could break it.
    food = "chicken"; //Sets foot to be chicken after it was hoisted
    console.log(food); //Logs chicken
    var food = "fish"; //gets hoisted to the top of the function
    console.log(food); //logs chicken
}
console.log(food); //undefined
//Doesn't run. TypeError


//**********GIVEN #6**********
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//__________RESULT #6__________
console.log(genre); //Logs undefined
var genre = "disco"; //Gets hoisted to the top but not the value
rewind(); //Logs rock and then r&b
function rewind() {
    genre = "rock"; //Sets genre to be rock 
    console.log(genre); //Logs rock
    var genre = "r&b"; //Gets hoisted to the top of the function. Sets genre to be r&b from rock
    console.log(genre); //Logs r&b
}
console.log(genre); //Logs disco
//undefined
//rock
//r&b
//disco


//**********GIVEN #7**********
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//__________RESULT #7__________
dojo = "san jose";
console.log(dojo); //Logs san jose
learn(); //logs seattle and burbank
function learn() {
    dojo = "seattle";
    console.log(dojo); //logs seattle
    var dojo = "burbank";
    console.log(dojo); //logs burbank
}
console.log(dojo); //Logs san jose from the top


//**********BONUS ES:6 - const**********
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
//__________BONUS ES:6 - const__________
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}