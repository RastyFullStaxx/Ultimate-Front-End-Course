// method chaining = calling one method after another in one continous line of code

let userName = "rasty";


/* without method chaining
let letter = userName.charAt(0);
letter = letter.toUpperCase();
console.log(letter); */

// with method chaining 
let letter = userName.charAt(0).toUpperCase().trim();
console.log(letter);

// basically it's adding another method in a line by adding a period and then call the next method