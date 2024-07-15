//1. callback function
//function is a block of code that performs a certain task when called.

function greet(name){
    console.log("Hi"+" "+name)
}
greet("Peter");

//In the above program, a string value is passed as an argument to the greet() function

//In JavaScript, you can also pass a function as an argument to
// a function. This function that is passed as an argument inside 
//of another function is called a callback function.

function greetMe(name,callback){
    console.log("Hi"+" "+name);
    callback();
    
}

//callback function
function callMe(){
    console.log("i am callback function");
}

//passing function as an argument
greetMe('Pratik',callMe);







// function fetchData(callback){
//     setTimeout(()=>{
//         callback("data received!");
//     },2000);
// }

// console.log("start");
// fetchData((data)=>{
//     console.log(data);
// });
// console.log("End");

