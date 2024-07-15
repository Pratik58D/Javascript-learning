function greet(name){
    console.log("Hello, " + name + "!");

}

greet("Pratik");   //output:Hello,Alice

greet("Bob");


//return statement:
//function can also return a value using the "return" keyword.
//This allows a function to produce 

function add(a,b){
    return a+b;
}

const result = add(4,7);
console.log(result)

sum = function(x,y){
    return x+y
}

console.log(sum(9,7))

//Types of function
//1.Named function:
//A function with specified name that can be called using that name

function add(a,b){
    return a+b;
}

//2. Ananymous Function:
//function without a specified name . it usally assigned to variable 
//or used as callback function
//callbackfunction is function that paassed as an argument to another function

//example of callback function

function hello(name,callback){
    console.log("hello," +name);
    callback();
}
function sayGoodbye(){
    console.log("goodbye!")
}

hello("Alice",sayGoodbye)

//anonymous Function
let greets = function(name){console.log("hello,"+name+"!");};
greets("ramesh")


//Arrow function:
let multiply =(a,b)=>a*b;
console.log(multiply(6,8))