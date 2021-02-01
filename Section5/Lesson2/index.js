//               0      1          2
let petNames = ["Fido","Whiskers","Rex"];
let age = new Array(12,9,3);

console.log(petNames[2]); // a specific item in an array
console.log(petNames.length); // how many items in the array
console.log(petNames); // whole array
console.log(petNames[0]); // first item in any array
console.log(petNames[petNames.length-1]); // last item in any array

petNames.forEach(i => console.log(i)); // do something with each item in the array
for (let i = 0; i< petNames.length; i++) {
    console.log(petNames[i])
}