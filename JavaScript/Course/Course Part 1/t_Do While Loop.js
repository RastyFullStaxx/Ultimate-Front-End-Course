// do while loop = execute the code first, before checking the condition
//                 will loop as long as the condition is satisfied 

let userName;

do{
    userName = window.prompt("Enter your username:");
    console.log("Hello, " + userName);
} while (userName == "" || !isNaN(userName) || userName == null);

