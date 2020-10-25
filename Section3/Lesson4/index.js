// var hoisting
console.log(add);
add = 3 + 1;
console.log(add);
var add;
console.log(add);

// function hoisting
console.log(addTwo(7,61));

function addTwo(a,b) {
    return a + b;
}