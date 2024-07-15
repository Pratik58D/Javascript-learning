// for each method is used to iterative over an array.

const fruits =["apple","banana","mango","orange"];
fruits.forEach(function(fruit,index){
    console.log(index+": "+fruit);
});

//example-2
let sum=0;
const numbers = [65,44,12,4];
numbers.forEach(myFunction);

function myFunction(item){
    console.log(sum+=item);
}

//example 3.

let students =["John","Sara","Jack"];
//using forEach

students.forEach(myfunc);

function myfunc(item){
    console.log(item+" Devkota")
}

//example 4 

const arrayItems = ["items1","Items2","item3"];
const copyItems =[];
arrayItems.forEach(function(item){
    copyItems.push(item);
})

console.log(copyItems)


console.log("example 5")

const staffsDetails=[
    {name:"Niramal kharal",age:44,salary:4000},
    {name:"Bibek Rokaya",age:14,salary:5000},
    {name:"Pratik Devkota",age:23,salary:6000},
];

staffsDetails.forEach((staffsDetail)=>{
    let sentence = `i am ${staffsDetail.name} a staff of Spark Skill `;
    console.log(sentence)
})

//next method
staffsDetails.forEach((staffsDetail,index)=>{
    let sentence = `Roll No. ${index}:${staffsDetail.name}`
    console.log(sentence)
})

// next method
console.log("print the name which has salary more than 4000") 
staffsDetails.forEach(({name,salary})=>{
    if (salary >4000){
        console.log(name)
    }
})





// How to use the array Argument
// The array argument is the third argument which holds the original array that is being iterated over. 

let scores = [12,55,70,47];
scores.forEach((score,index,array)=>{
    console.log(array)
});


//How to Add All Values in An Array of Numbers with forEach()

let marks = [1,2,3,4];

let total = 0;

marks.forEach((mark)=>{
    total += mark

});

console.log(total)

//////////////////






















