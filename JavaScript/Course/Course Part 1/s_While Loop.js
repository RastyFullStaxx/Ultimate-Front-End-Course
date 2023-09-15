// while loop = repeat a block of code as long as the condition is true

let userName = "";

while(userName == "" || !isNaN(userName) || userName == null){
    userName = window.prompt("Enter your username!");
} console.log("Hello " + userName);