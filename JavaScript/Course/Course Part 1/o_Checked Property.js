

document.getElementById("myButton").onclick = function(){
    
    const myCheckbox = document.getElementById("myCheckbox");

    const visaButton = document.getElementById("visaButton");
    const mstrButton = document.getElementById("mstrButton");
    const ppButton = document.getElementById("ppButton");

    if(myCheckbox.checked == 1){
        console.log("You are Subscribed!");
    }
    else{
        console.log("You are NOT subscribed!");
    }

    if(visaButton.checked == 1){
        console.log("You are paying with VISA!");
    } else if(mstrButton.checked == 1){
        console.log("You are paying with Master Card!");
    } else if (ppButton.checked == 1){
        console.log("You are paying with PayPal!");
    } else {
        console.log("Please select a payment type!")
    }

};