// if statement = if the condition is true, the statement is executed. vice versa

let age = 66;

if(age >= 18 && age <= 64){
    console.log("You are in the legal age!");
}
else if(age >= 12 && age < 17){
    console.log("You're a half ass");
} 
else if(age <= 0){
    console.log("You haven't even born yet!");
}
else if(age >= 65){
    console.log("You are a senior citizen!");
}
else{
    console.log("You are a baby!")
}

let online = 1;

if(online == true){
    console.log("You are online");
} else {
    console.log("You are offline");
}