console.log("hello world");
console.log(1+1);
console.log("The Square Root of 1025 is: 32.015621187.");
// The Square Root of 1025 is: 32.015621187.

console.log("Spot 1")
let result = prettyRoot(-5);
console.log(result);

console.log(prettyRoot(1025, 2));
console.log("Spot 2")
// console.log(Math.sqrt(1025));
// console.log();
// thing.thing(value).thing();
// thing.thing(value).thing(value);
// thing.thing(value, value2);
// thing.thing(thing(value));
// thing.thing(thing(value).thing(value));
// console.log(`Erin almost remembered ${this}`);

function prettyRoot(inputNum: number, decimalPlaces = 9): string {
    let value = Math.sqrt(inputNum).toFixed(decimalPlaces);
    return `The Square Root of ${inputNum} is: ${value}.`;
}