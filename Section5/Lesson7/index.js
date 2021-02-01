// Section 5 Code Challenge
// Create an object named person and store your name, age, city, and favorite food as key value pairs.
// Use dot notation to console.log your name.
// Use bracket notation to call your city. 
// Add a function that when called, says: `Hi my name is <name> and I am <age> years old.`

const me = {
    name: 'Pace',
    age: 33,
    city: 'Chicago',
    "favorite food": "lasagna",
    greeting: function() {console.log(`Hi my name is ${this.name} and I am ${this.age} years old.`)}
}

console.log(me.name);
console.log(me["city"]);

me.greeting();
