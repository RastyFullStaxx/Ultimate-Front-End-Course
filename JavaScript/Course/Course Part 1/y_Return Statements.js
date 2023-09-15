// return = returns a value back to the place where you invoked a function

let area, width, heigth;

width = window.prompt("Enter width");
heigth = window.prompt("Enter height");

area = getArea(width, heigth);          // the area is returned here, since this is where the function is invoked

console.log("The area is:", area);

function getArea(width, heigth){
    let result = width * heigth;
    return result;                      // whatever value is listed here, will be returned
}