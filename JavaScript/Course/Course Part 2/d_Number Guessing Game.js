const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function (){
    
    let guess = document.getElementById("guessField").value;
    guesses += 1;


    if(guess == answer){
        alert(`Great job!, ${answer} is the is number. It took you ${guesses} number of entries though...`);
    } else if (guess < answer){
        alert("Higher please");
    } else {
        alert("Lower please");
    }

}