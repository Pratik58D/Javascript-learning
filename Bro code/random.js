let randomNum =Math.floor((Math.random() * 6)+1);

console.log(randomNum)


//random number between 10 to 20

function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1))+min
}

const randomNumber = getRandomNumber(10,20);
console.log(randomNumbers)