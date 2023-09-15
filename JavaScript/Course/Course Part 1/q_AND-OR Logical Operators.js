// Gives the ability to have more than 1 conditions
// && (AND Operator) = Both conditions must be true before a statement is executed
// || (OR Operator) = At least one conidtion must be true before a statement is executed

let temp = 29;
let sunny = true;

if(temp > 0 && temp < 30 && sunny == true){
    console.log("The weather is good!");
} else {
    console.log("The weather is bad");
}

