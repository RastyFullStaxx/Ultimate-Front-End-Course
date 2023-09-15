// Ternary Operator = shortcut for an if/else statement 
//                    takes 3 operands

//                    1. a condition with ?
//                    2. expression if True :
//                    3. Expression if False

// condition ? exprIfTrue : expriIfFalse

let adult = checkAge(18);
console.log(adult);

/* Using the traditional if/else statement
function checkAge(age){
    if(age >= 18){
        return true;
    } else {
        return false;
    }
}
*/

function checkAge(age){
    return age >= 18 ? true : false
}

// ------------------------------------------------------------------------ //

checkWinner(0);

function checkWinner(win){
    win == true ? console.log("You win!") : console.log("You lose...")
}