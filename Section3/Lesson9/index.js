// Section 3 Challenge:
// Start with these variable for the ages Fido and Whiskers: fidoAge = 12, whiskersAge = 9
// Store the number 7 as a variable named dogYears and store the number 5 as a variable named catYears. 
// Calculate how old Fido and Whiskers are in human years.
// Create a boolean to say whether or not Fido is older than Whiskers.
// Print a string to the console with the boolean variable, like “Is Fido older? true”

let fidoAge = 12; // Fido
let whiskersAge = 9 // Whiskers
let dogYears = 7;
let catYears = 5;

let fidoHumanYears = fidoAge * dogYears; // 84
let whiskersHumanYears = whiskersAge * catYears; // 45

let isFidoOlder = fidoHumanYears > whiskersHumanYears; // true

console.log("Is Fido older? " + isFidoOlder);