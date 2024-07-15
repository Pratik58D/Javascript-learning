console.log("example1");

//scenario: you an array of numbers and you want to double each number in array.
//without map
const  numbers = [1,2,3,4,5];
const doubledNumber =[]

for(let i=0;i<numbers.length;i++){
    doubledNumber.push(numbers[i]*2);
}

console.log(doubledNumber)

//with map

const doubleNumbers=numbers.map(num =>num*2) ;
console.log(doubleNumbers)



//object Transformation
//You have an array of user objects and you want to extract act
//only their IDs into a new array.

//without map

const users = [
    {id:1,name:"pratik"},
    {id:2,name:"Nirmal"},
    {id:3, name:"Bibek"}
]

const userIds=[];
for (let i=0; i<users.length;i++){
    userIds.push(users[i].id)
}

console.log(userIds)


//with maps
const userId = users.map(user => user.id);
console.log(userId)














