//string slicing = creating a substring from a portion of another string 


//string.slice(start,end)


let text = "Pratik Devkota";

let result = text.slice(0,5);

console.log(result)

let results = text.slice(3);  //psition 3 toend
console.log(results)

let lastchar = text.slice(-4)

console.log(lastchar)



const email = "pratikdevkota5*@gmail.com";

let username = email.slice (0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") +1)


console.log(username)
console.log(extension)





