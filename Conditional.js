//1.Consitional Statements
//if_else:
// execute a block of code if a condition is true: otherwise,executes a different block of code

let age = 20;
age = Number(age);
if(age >18){
    console.log("you are adult");
}
    else{
        console.log("you are underage")
    }


//switch ...case:
//ealuates an expression and executes diffeent blocks of code based on differnet cases.

let day = 'Monday';
switch (day){
    case "Monday":
        console.log("Its Monday.");
        break;
    case "Tuesday":
        console.log("its a Tuesday.");
        break;
    default:
        console.log("its some other day.")
        break;
}

