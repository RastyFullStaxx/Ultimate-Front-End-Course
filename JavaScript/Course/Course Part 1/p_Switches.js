let grade = 90;
//grade = grade.toUpperCase();

/*
switch(grade){
    case 'A':
        console.log("Excellente!");
        break;
    case 'B':
        console.log("Very Good!");
        break;
    case 'C':
        console.log("Not bad!");
        break;
    case 'D':
        console.log("Not bad I suppose...");
        break;
    case 'E':
        console.log("I don't know..");
        break;
    case 'F':
        console.log("Wow, you're an idiot aren't you?");
        break;
    default:
        console.log("Invalid Grade, st2pid!");
        break;
}
*/

switch(true){
    case grade >= 90:
        console.log("Excellente!");
        break;
    case grade >= 85:
        console.log("Very Good!");
        break;
    case grade >= 80:
        console.log("Not bad!");
        break;
    case grade >= 75:
        console.log("Not bad I suppose...");
        break;
    case grade >= 60:
        console.log("I don't know..");
        break;
    case grade > 50:
        console.log("Wow, you're an idiot aren't you?");
        break;
    default:
        console.log("Invalid Grade, st2pid!");
        break;
}