// array = a variable that can store multiple variables
// length = the total number of index in the array starting from 0
// syntax = arrayName = ["item1, item2", "item3, ... "]

let fruits = ["apple", "orange", "grape", "banana"];



fruits[1] = "coconut"           // you can update an element in the array by accessing it
console.log(fruits[1])

fruits.push("lemon", "pear");   // use push to add an element
console.log(fruits[4])
console.log(fruits)

fruits.pop("lemon");            // use pop to remove the last element
console.log(fruits)

fruits.unshift("raspberry");    // use unshift to add an element to the beginning of the array
console.log(fruits)

fruits.shift("raspberry");      // use unshift to remove an element from the beginning of the array
console.log(fruits)

let fruitsLength = fruits.length;       // check length
console.log(fruitsLength);

let fruitsIndex = fruits.indexOf("banana");     // find the index of an element. -1 will appear if there is no index
console.log(fruitsIndex);