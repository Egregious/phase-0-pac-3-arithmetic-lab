let a;
let b;
let n;
let string;

function add(a, b) {
    return(a + b); 
}
function subtract(a, b) {
    return(a - b);
}
function multiply(a, b) {
    return(a * b);
}
function divide(a, b) {
    return(a / b);
}
function increment(n) {
    n++;
    return(n);
}
function decrement(n) {
    n--;
    return(n);
}
function makeInt(n) {
    parseInt(n, 10);
    return parseInt(n, 10);
}
function preserveDecimal(n) {
    parseFloat(n);
    return parseFloat(n);
}
function makeInt(string) {
    parseInt(string, 10);
    return parseInt (string, 10);
}
function preserveDecimal(string) {
    parseFloat(string);
    return parseFloat(string);
}