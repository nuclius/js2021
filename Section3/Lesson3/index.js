let animal, isHungry, age;

animal = 'dog'; // string
isHungry = true; // boolean
age = 12; // number

// console.log("My " + animal + " is " + age + " years old.");
// if(isHungry) {
//     console.log("It's " + isHungry + ". He's hungry.")
// }

// Variable Mutation
age = 13;
isHungry = false;

if(isHungry) {
    console.log("It's " + isHungry + ". He's hungry.")
}

let firstName = "Pace";
// let lastName = prompt("What is his last name?");
// console.log(firstName + " " + lastName);
// alert(firstName + " " + lastName);




// var
var testVar = 2; // Declaration & Assignment
testVar = 3; // Assignment (mutation)
testVarB = 3; // Declaration & Assignment
var testVar = 3; // Re-Declaration & Assignment

// let
let testVarC = 4;
// let testVarC = 5;
testVarC = 5;
// Cannot redeclare a let

// const
const testVarD = 5;
// testVarD = 8; 
// Cannot reassign or redeclare a const

let testVarE; // undefined
testVarE = null; // null
console.log(testVarE);

