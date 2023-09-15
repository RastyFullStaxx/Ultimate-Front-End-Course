// toLocaleString() = returns a string with a language sensitive representation of this

// number.toLocaleString(locale, {options})

// locale = specify that language (undefined = default set in browser)
// options = object formatting options

let myNum = 123456.789;

// LOCALE
//myNum = myNum.toLocaleString("en-US");        // US English 
//myNum = myNum.toLocaleString("hi-IN");        // Hindi
//myNum = myNum.toLocaleString("de-DE");        // Standard German


// OPTIONS
//myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"})         //US Dollars
//myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"})         //Rupees
//myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"})         //Euros

// OTHER OPTION STYLES  
//myNum = myNum.toLocaleString(undefined, {style: "percent"})                   //percent
myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"})       //celsius

console.log(myNum);