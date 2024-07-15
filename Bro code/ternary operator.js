//ternary operator is a shortcut to if() and else statements
// helps to assign a variables based on condition
//condition ? codeifTrue : codeifFalse 

let age = 21;
let message = age >=18 ? "you are eligible to vote" : "you are not eligible to vote";

console.log(message)


let time = 10 ;
let greeting =  time < 12 ? " Good morning!" : "Good Afternoon";

console.log(greeting)


let isStudent = true;
let msg = isStudent ? "he is a student" : "he is not a student";
console.log(msg)


//checkEvenOdd 

function checkEvenOdd(number){
    const result = number % 2 === 0 ? "even" : "odd"
    return result 
}

console.log(checkEvenOdd(4))
console.log(checkEvenOdd(9))


console.log("another example")

function decideActivity(weather){
    const activity = weather === "sunny" ?"go out" : "stay in ";
    return activity
}


console.log(decideActivity("raning"));
console.log(decideActivity("Snowing"));
console.log(decideActivity("sunny"));


console.log("positive or not")

function checkNumber(number){

    const ispositive = number > 0 ? "positive": number === 0 ? "zero" : "negative" ;
    return ispositive
}

console.log(checkNumber(-1));
console.log(checkNumber(0));
console.log(checkNumber(100));



console.log("cold drink or not");
function getDrink(age){
    return age >= 21
    ? "enjoy a cocktail"
    : age >= 18
    ? 'Have a beer'
    : age >= 16
    ? "grab a soft drink"
    : " sorry , you're too young for drink" ;
}


console.log(getDrink(25))
console.log(getDrink(20))
console.log(getDrink(17))
console.log(getDrink(100))
console.log(getDrink(10))














