// in js, B O  are used to manipulate individual bits of integer numbers.
//these operators treat their operands as sets of 32-bit binary digit(0's & 1's)

let num1 =5;  //binary:0101
let num2 = 1; //Binary : 0001

let andResult = num1 & num2;
let orResult = num1 | num2;
console.log(andResult);   //output:1 (binary :0001)
console.log(orResult);    //output: 5 (binary: 0101)

