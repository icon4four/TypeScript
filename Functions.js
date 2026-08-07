"use strict";
// Typed Parameters
function add(a, b) {
    return a + b;
}
console.log(add(89, 77));
function sub(a, b) {
    return a - b;
}
console.log(sub(87, 55));
function mul(a, b) {
    return `multiply value is ${a * b}`;
}
console.log(mul(8, 67));
function div(a, b) {
    return `division value is : ${a / b}`;
}
console.log(div(6742, 87));
function greet(a, b) {
    console.log(a);
    if (b != undefined) {
        console.log(b);
    }
}
greet("hi");
greet("hello", "nice to meet you");
