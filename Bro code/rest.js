//rest parameter =  (...rest) allow a function work with a variable 
//                 number of arguments by bundling than an array


//spread = expands as array into separate elements rest -bundels
//elements into an array



function openFridge(...foods){
    console.log(...foods);
}

const food1 = "pizza";
const food2 = "hamburger"
const food3 = "hotdog"
const food4 = "sushi"
const food5 = "ramen"

openFridge(food1,food2,food3,food4,food5)

function getFood(...foods){
    return foods
}

const foods = getFood(food1,food2,food3,food4,food5)
console.log(foods)

//////////////////////////////
console.log("Example 2")

function sum(...numbers){
    let result = 0;
    for (let number of numbers){
        result += number
    }
    return result

}

const total = sum(1,2,3,4,5,6)
console.log(`yourtotal is ${total}`)


////////////////////////////////////
console.log("example 3")
 function getAverage(...digits){
    let sum = 0;
    for(let digit of digits){
        sum += digit;
    }
    return sum/digits.length;
 }

 const average = getAverage(1,2,3,4)

 console.log(`your total is ${average} `)










