// Method chaining = calling one method after another in one continous line of code


//....No method chaining ....

let username = window.prompt("enter your name: ");


username = username.trim()
let letter = username.charAt(0);

letter = letter.toUpperCase();

let extraChars = username.slice(1)   //position 1 to  end
username = letter + extraChars;


console.log(username)


//method chainng....

userName = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()

console.log(userName)
