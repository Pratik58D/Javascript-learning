const prompt = require('prompt-sync')();

const minNum = 1;
const maxNum = 50;

const computerGuess =Math.floor((Math.random() *(maxNum -minNum))) + minNum

//console.log(number)
//console.log(computerGuess)

let attempt = 0
let hasWon  = false

while (true) {
    const  number = prompt("enter the number: ").trim()
     attempt ++; 

     if (number === "" || isNaN(number)){
        console.log("Mugi ramro sango number hal")
     }

    else if (number < computerGuess){
        console.log("guessing number is higher")
        
    }
    else if (number > computerGuess){
        console.log("guessing number is lower")
        
      }
    else if (number === computerGuess){
        console.log("congratulation , you have win")
        hasWon =true ;
        break ;
        
      }
     
      if (attempt >= 10){
        console.log("better luck next time")
        break;
      }

}

if(hasWon){
    console .log("you score is : ",attempt)
 
}

