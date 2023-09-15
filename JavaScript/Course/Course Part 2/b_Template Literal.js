// Template Literals = delimited with (`)
//                     instead of double or single quotes
//                     allows embedded variables and expressions

let userName = "Rasty";
let items = 3;
let totals = 75;

/* using traditional outputting method
console.log("Hello", userName,)
console.log("You have", items, "items in your cart.")
console.log("Your total price is $" + totals);
*/

// using template literals 
/*
console.log(`Hello ${userName}`)
console.log(`You have ${items} items in your cart.`)
console.log(`Your total price is $${totals}`)
*/

// using template literals in long strings
let text = 
`Hello ${userName}<br>
You have ${items} items in your cart.<br>
Your total price is $${totals}<br>`;

//console.log(text)
document.getElementById("myLabel").innerHTML = text;