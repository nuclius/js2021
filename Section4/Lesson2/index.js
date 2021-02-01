// String Concatenation

let string1 = "My dog's name" + " is " + "Bones!";
console.log(string1);

let string2 = "My dog's name";
string2 += " is "; // string2 = string2 + " is ";
string2 += "Bones!";
console.log(string2);

let string3 = "My dog's name";
string3 = string3.concat(" is ","Bones!");
console.log(string3);

// Multi-line strings

console.log("first line 1\n" + 
"second line 2")

console.log(`first line 1
second line 2`)

// Template literals and interpolation

let string4 = "Bones!";
let string5 = `My dog's name is ${string4}`;
console.log(string5);