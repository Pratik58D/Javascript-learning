//spread operator = ...allows an iterable such as an array or string to be
//                  expanded into separate elements(unpacks the element)


let numbers = [1,2,3,4,5]

let maximum = Math.max (...numbers);

console.log(maximum)



//example 2
let fruits = ["apple","orange","banana"];

let vegetables = ["carrots","celery","potatoes"];

console.log(fruits,vegetables)

let foods = [...fruits, ...vegetables]
console.log(foods)





