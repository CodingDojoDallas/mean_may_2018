// #1-GIVEN
console.log(hello);                                   
var hello = 'world'
// #1-HOISTED
var hello;
console.log(hello);
hello = 'world';

//#2-GIVEN
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
//#2-HOISTED
var needle;
function test(){
  var needle;
  console.log(needle);
  needle = 'magnet';
}
test();
needle = 'haystack';

//#3-GIVEN
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
//#3-HOISTED
var brendan;
function print(){
  brendan = 'only okay';
  console.log(brendan);
}
console.log(brendan);
brendan = 'super cool'

//#4-GIVEN
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
//#4-HOISTED
var food;
console.log(food);
eat();
function eat(){
  var food;
  food = 'gone'
  food = 'half-chicken';
  console.log(food);
}
food = 'chicken';

//#5-GIVEN
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
//#5-HOISTED
mean();
console.log(food);
var mean = function() {
  var food;
  food = "chicken";
	console.log(food);
	food = "fish";
	console.log(food);
}
console.log(food);


//#6-GIVEN
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
//#6-HOISTED
var genre;
console.log(genre);
genre = "disco";
rewind();
function rewind() {
var genre;
genre = "rock";
genre = "r&b";
console.log(genre);
}
console.log(genre);



//#7-GIVEN
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
//#7-HOISTED
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	var dojo;
	dojo = "seattle";
	console.log(dojo);
	dojo = "burbank";
}
console.log(dojo);


//#8-GIVEN
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}