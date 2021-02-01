const cat = {
    name: 'Whiskers',
    age: 9,
    type: 'calico',
    sayHi: function() { 
        console.log("Meowwww")
    }
}

// Dot Notation
console.log(cat.name) // 'Whiskers'
// Bracket Notation
console.log(cat["name"]) // 'Whiskers'

// cat.sayHi = function() { 
//     console.log("Meowwww")
// };

console.log(cat);

cat.sayHi();