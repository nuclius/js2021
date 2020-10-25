// Global execution context
let msg = "Hello, World!";

function logMsg() {
    // Function execution context
    console.log(msg);
}

/* eval execution context
** 'eval' is not preferred in ES6+
** eval(console.log("Hello, World"));
*/

// console.log("Hello, World!");
// logMsg();
// console.log(msg);

// Type Coercion
let animal, isHungry, age;

animal = 'dog'; // string
isHungry = true; // boolean
age = 12; // number

console.log("My " + animal + " is " + age + " years old.");
if(isHungry) {
    console.log("It's " + isHungry + ". He's hungry.")
}

// Variable Mutation
age = 13;
isHungry = false;

if(isHungry) {
    console.log("It's " + isHungry + ". He's hungry.")
}