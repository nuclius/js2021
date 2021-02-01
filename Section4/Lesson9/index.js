const petName = "Fido";
let mood = "sad";

if (mood === "happy") {
    console.log(petName + " is a " + mood + " doggo!");
} else {
    console.log(petName + " will hopefully be happy soon.");
}

let isHungry = false;

if (isHungry) {
    console.log(petName + " is hungry!");
} else {
    console.log(petName + " will hopefully eat soon.");
}

let fidoWeight = 45;
let whiskersWeight = 45;

if (fidoWeight > whiskersWeight) {
    console.log("Fido weighs more than Whiskers!")
} else if (fidoWeight === whiskersWeight) {
    console.log("Fido and Whiskers weigh the same!")
} else {
    console.log("Whiskers weighs more than Fido!")
}