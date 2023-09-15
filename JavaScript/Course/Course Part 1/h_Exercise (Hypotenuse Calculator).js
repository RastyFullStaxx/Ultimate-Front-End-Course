/*
let a = parseFloat(window.prompt("Give a value for a"));
let b = parseFloat(window.prompt("Give a value for b"));
let c = parseFloat(window.prompt("Give a value for c"));

let squareOfHypotenuse = Math.pow(c, 2);
let sumOfSquares = Math.pow(a, 2) + Math.pow(b, 2);

result = sumOfSquares === squareOfHypotenuse;

console.log("a is", a)
console.log("b is", b)
console.log("c is", c)
console.log("The phytagorean theorem result with the squares being", + sumOfSquares , "and the hypotenuse being", + squareOfHypotenuse + " is", + result);
*/


/*
let a;
let b;
let c;

a = parseFloat(window.prompt("Enter side A"));
a = Number(a);

b= parseFloat(window.prompt("Enter side B"));
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("Side C:", c.toFixed(2));
*/

let a;
let b;
let c;

document.getElementById("submit").onclick = function(){

    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("clabel").innerHTML = "Side C: " + c.toFixed(2);
}