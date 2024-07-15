  function rollDice(){
    const numOfdiceelement = document.getElementById("numOfDice")
    const numOfdice = parseInt(numOfdiceelement.value,10);  
    //console.log(numOfdice)
    const diceResult = document.getElementById("diceResult")
    const diceImages = document.getElementById("diceImages")
    const values = [];
    const images = [] ;

    for(let i=0;i<numOfdice ; i++){
        const value = Math.floor(Math.random()*6)+1 ;  


        //console.log(value) 
        values.push(value);
        images.push(`<img src="images/dice ${value}.png" alt="dice ${value}" >`);


    }
    diceResult.textContent=`dice : ${values.join(",")}`
    diceImages.innerHTML = images.join('')

  }




//   numOfdiceelement.value retrieves the value of the input element as a string. For example, if the user inputs 3, numOfdiceelement.value will be "3".
// parseInt converts this string value to an integer. So, parseInt("3", 10) will give you the number 3.
// The 10 is the radix, meaning the base of the number system you're using. Since we're working with decimal numbers, the radix is 10.





// math.random():
// This function generates a random floating-point number between 0 (inclusive) and 1 (exclusive). The result can be any decimal number from 0 up to, but not including, 1.
// Math.random() * 6:
// Multiplying the result of Math.random() by 6 scales the range from [0, 1) to [0, 6). This means the result is a floating-point number between 0 (inclusive) and 6 (exclusive).
// Math.floor(Math.random() * 6):
// Math.floor() rounds down the floating-point number to the nearest integer. This changes the range from [0, 6) to [0, 5], producing one of the following integers: 0, 1, 2, 3, 4, or 5.
// Math.floor(Math.random() * 6) + 1:

// Adding 1 shifts the range from [0, 5] to [1, 6]. This ensures that the generated number is between 1 and 6, inclusive.