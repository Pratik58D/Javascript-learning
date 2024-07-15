
//2.Loops
//for loop:
//Repeats a block of code a specified number of times.

for (let i=0;i<5;i++){
    console.log(i);
}
//while loop:
//Repeats a block of code while a specified condition is true

let count = 0;

while (count<5){
    console.log(count);
    count++
}


//do...while:
//Repeats a blocks of code at least once ,then continues while a specific
//condition is trus
let counter= 0;
do {
    console.log(count);
    count++;
}while(count<5);

//forEach loop: iterates over elements of an array and executes 
//a function for each element

let numbers =[1,2,3,4,5];
numbers.forEach(function(number){
    console.log(number);
});