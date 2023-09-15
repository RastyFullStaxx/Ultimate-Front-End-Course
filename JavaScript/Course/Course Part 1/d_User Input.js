//User input via JS

// Easier way = window prompt
//let username = window.prompt("What's your name? ");
//console.log(username);

// Harder way: HTML Textbox
let username;
document.getElementById("submit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Your username: " + username;
}