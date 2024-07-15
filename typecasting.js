//typecasrting is also called type conversion is the process of transforming
// a value from one data type to another in javascript

//1.implicit(automatic):
// occurs automatically during operations or assignments

console.log("10"+5)

//Explict (manual):
//we control the conversion using built-in functions

let age = "25"

console.log(typeof(age))
let ageAsNumber = Number(age);
console.log(typeof(ageAsNumber))

let ageasboolean = Boolean(age)
console.log(ageasboolean)