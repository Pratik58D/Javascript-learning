//while loop + repeat some code while some condition is true

const myArray =[];


let i =5;

while(i < 10){
    console.log(i)
    i++
}

let n = 0 ;
let x = 0 ;

while (n<3){
    n++;
    x+=n
}
console.log(x)




let username = ""

while(username === ""){
    console.log("you didn't enter your name: ");
    break;
}

console.log(`hello ${username}` )

//for loop


for (let i=0 ; i <5 ;i++){
    if(i === 3){
        continue
    }
    console.log(i)
}


let index = 0;

while (index <5){
    console.log(index)
    index++
}