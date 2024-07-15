//callback = a function that is passed as an  assignment to another function.

//quote: This is a string that represents the main quote.
//callback: This is a function that will be called with the created quote.
function createQuote (quote,callback){
    var myQuote = "Like i always say, " + quote;
    callback(myQuote) ;  
}


function logQuote(quote){
    console.log(quote)
}

createQuote("eat your vegetables! ",logQuote);


///////example -2

console.log("example 2")
function doSomething(callback){
    console.log("doing something......")
    //call the callback function
    callback();
}
function myCallback(){
    console.log("callback executrd")
}
//passing the calllback function as ana argument
doSomething(myCallback)



///////example - 3
//using callbacks with setTimeOUt

//setTimeout is a bult in js function that calls a function or evaluates an
//expression after a specified number of millisecons


function greet(name){
    console.log(`Hello, ${name}!`)
}

console.log("Before setTimeout")

setTimeout(function(){
    greet("Alice");
},2000);

console.log("After setTimeout");


//callbacks with Array methods

const numbers = [1,2,3,4,5];


numbers.forEach(function(number){
    console.log
})





//simple
hello(leave);
function hello(callback){
        console.log("hello");
        callback();
   
}
function leave(){

console.log("leave")


}
function goodbye(){
    console.log("Goodbye!");
}





//another one

sum(displayConsole,1,2)

function sum(callback,x,y){
    let result = x+y;
    callback(result);
}

function displayConsole(result){
    console.log(result)
}












