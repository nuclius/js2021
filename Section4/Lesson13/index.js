// Section 4 Code Challenge:
// 1. Write an if-else statement.
// 2. Write an if-else if-else statement.
// 3. Convert your if-else and your if-else if-else statements into ternary statements.
// 4. Take your if-else if-else statement and make it a switch statement.

let age = 35;

if (age > 40) {
    console.log("I am now middle-aged.")
} else {
    console.log("I'm still young yet.")
}

age > 40 ? console.log("I am now middle-aged.") : console.log("I'm still young yet.")

if (age > 40) {
    console.log("I am now middle-aged.")
} else if (age == 33) {
    console.log("Hey that's how old I am!")
} else {
    console.log("I'm still young yet.")
}

age > 40 ? console.log("I am now middle-aged.") : age == 33 ?  console.log("Hey that's how old I am!") : (console.log("I'm still young yet.") )

switch (true) {
    case (age > 40):
        console.log("I am now middle-aged.")
        break;
    case (age == 33):
        console.log("Hey that's how old I am!")
        break;
    default:
        console.log("I'm still young yet.")
}