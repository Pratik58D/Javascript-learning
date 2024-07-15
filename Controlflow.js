//break: terminates the current loop or switch statment

for (let i=0;i<5;i++){
    if(i==3){
        break;
    }
    console.log(i);
}

//continue:
//skips the current iteration of loop and continue with the next iteration

for (let i = 0;i<5;i++){
    if(i==3){
        continue;
    }
    console.log(i);
}


//return:
//exits the current function and optinally returns value

function addNumbers(a,b){
    if(typeof a !=="number" || typeof b !="number"){
        return "invalid input"
    }
    return a+b;
}

console.log(addNumbers("ram",50))