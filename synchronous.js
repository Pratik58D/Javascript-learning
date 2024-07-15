//it excutes one operation at a time ,blocking further execution
//until the current operation is completed
//They follow the traditional sequential flow of code execution

//examples are regular named functions,anonymous function,and
//arrow function

function add(a,b){
    return a+b;
}

let result = add(2,3);
console.log(result);
//example two

function f1(){
    console.log("it is my 1st function");
}

function f2(){
    console.log("it is my 2nd function");
    f1();
}
f2();


//example3
console.log("this is the")
function syncFunction(){
    console.log("start");
    for(let i=0 ; i<2 ; i++){
        console.log("middle")
    }
    console.log("end")
}

console.log("Before");
syncFunction();
console.log("after")


