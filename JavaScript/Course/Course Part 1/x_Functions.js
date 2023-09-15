// function = define a code once, then use it many times.
//            to execut a function, we must call it

startProgram();

function startProgram(){
    let userName = "Rasty";
    let age = 21;

    happyBirthday(userName, age);
};



function happyBirthday(userName, age){  // arguments can be renamed here, just pay attention to the order
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday dear,", userName, "!");
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday! You are", age,"years old!");
};

