const fruit = "apple"

switch (fruit) {
    case 'strawberry':
    case 'raspberry':
        console.log("A " + fruit + " is red.");
        break;
    case 'blueberry':
        console.log("A " + fruit + " is blue.");
        break;
    case "banana":
        console.log("A " + fruit + " is yellow.");
        break;
    default:
        console.log("I don't know what color the " + fruit + " is.")
}