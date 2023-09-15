//Extracts a section of a string and returns it into a new string

let fullName = "Noemi Cabili";
let firstName;
let lastName;

//lastName = fullName.slice(6);
lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(lastName);

//firstName = fullName.slice(0, 5);
firstName = fullName.slice(0, fullName.indexOf(" "));
console.log(firstName);
