// Console and Alert
console.log("This is logging in the console");

// alert("This is an alert appearing in the browser");


// Variables
var variableNumber = 1;
var variableString = "This is a string";
var variableArray = ["Item 1", 2, false, "Item 4"];
console.log(variableString);

console.log(variableArray);


// if and else
if (variableNumber == 1) {
    console.log("variableNumber is equle to 1");
}
// This will only run if variableNumber is equle to 1

if (variableNumber == 1) {
    variableNumber = 2;
} else {
    variableNumber = 6;
}
console.log(variableNumber);


// Operators
if (variableNumber < 2) {
    variableNumber = 7;
} else {
    console.log("variableNumber is greater than or equal 2");
}

variableNumber = 9

if (variableNumber & 2 == 1) {
    console.log("variableNumber is an odd number");
}

if (variableNumber != 11) {
    console.log("variableNumber does not equle 11");
}


// parseInt
var total = "5" + 5;
// total is now equle to "55"
var newNumber = parseInt("5");
total = newNumber + 5;
// total is now equle to 10

console.log(parseInt(85.984));

//var userInput = parseInt(prompt("What is your favorate number?"));


// For loops
var days = ["Monday", "Tuesday", "Wednesday"];

for (var i = 0; i < days.length; i++) {
    console.log(days[i]);
}

var variableArray = ["Item 1", 2, false, "Item 4"];

for (var i = 0; i < variableArray.length; i++) {
    console.log(variableArray[i]);
}


// Multi-dimensional arrays
var days = ["Monday", "Tuesday", "Wednesday"];
var tasks = [
    ["Cooking", "Cleaning"],
    ["Vacuuming"],
    ["Working", "Coding", "Writing"]
];

for (var i = 0; i < days.length; i++) {
    console.log(days[i])
    for (var a = 0; a < tasks[i].length; a++) {
        console.log(tasks[i][a]);
    }
}

for (var i = 0; i < days.length; i++) {
    console.log(days[i])
    for (var a = 0; a < tasks[i].length; a++) {
        if (tasks[i].length >= 2) {
            console.log(tasks[i][a]);
        }
    }
}


// Functions
function newFunction () {
    console.log("Every time this function is called, I get added to the console!");
}

newFunction();


function someMath (num1, num2) {
    console.log(num1 + num2);
}

someMath(2, 5);
// Would log 7

someMath(6, 11);
// Would log 17

someMath(378, 1911);
// Would log 2289


function someMoreMath (num1, num2) {
    return num1 * num2;
}

console.log(someMoreMath(2, 5));
// Would log 10

console.log(someMoreMath(6, 11));
// Would log 66

console.log(someMoreMath(378, 1911));
// Would log 722358


// Scopes
var globalVariable = "I am a global variable";

function coolFunction () {
    console.log(globalVariable);
}
coolFunction();
// This will log I am a global variable

function anotherCoolFunction () {
    var localVariable = "I am a local variable";
    console.log(localVariable);
}
anotherCoolFunction();
// calling localVariable will crash
// console.log(localVariable);


// Objects
var person = {
    firstName: "Tom",
    lastName: "Brown",
    age: 23,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.firstName);
// Will log Tom

console.log(person.fullName());
// Will log Tom Brown

var anotherPerson = {
    firstName: "Josh",
    lastName: "Cook",
    age: 31,
    favoriteFood: "Sushi",
    favoriteMovie: "Avengers End Game",
    hasCat: false,
    hasDog: true,
}

// As you can see, it is quite easy to make a full profile for a person by just making the object as big as you want


