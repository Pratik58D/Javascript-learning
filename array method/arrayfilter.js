//without filter
const nums = [1,2,3,4,5,6];
const evenNum = [];
for ( let i=0 ; i<nums.length ; i++){
    if (nums[i] %  2 === 0){
       evenNum.push(nums[i]);
    }
}
console.log(evenNum)

//with filter
const eveno =  (digit) => {
    return digit % 2 === 0 
}

const digits = [1,2,3,4,5,6]
const evenDigits = digits.filter(eveno)
console.log(evenDigits)


//filtering out Null or undifined values
//we have array contsining both numbers abd null or undefined values 
//and we want to filter out these null or undefined values

//withoutfilter
console.log("filtering Null value")

const values = [10,null,20,undefined,30];
const filteredValues =[];
for (let i=0 ; i<values.length;i++){
    if( values[i] !== null && values[i] !== undefined ){
        filteredValues.push(values[i]);
    }
}

console.log(filteredValues)

//with filter
console.log("filter method")

const filterarray = values.filter(value => value !==null && value !== undefined);
console.log(filterarray)



// filtering objects based on property values


const product = [
    {id:1,name : " Product 1", price: 40},
    {id:2,name : " Product 2", price: 90},
    {id:3,name : " Product 1", price: 50},
];

const expensiveProduct =[];
for ( let i=0; i < product.length;i++){
    if(product[i].price>50){
        expensiveProduct.push(product[i]);

    }
}

console.log(expensiveProduct)


//with filter:

const expensiveProducts= product.filter(product=> product.price > 50);

console.log(expensiveProduct)






// example-2
console.log("example 2")
let numbers = [1,2,3,4,5,6,7,8,9];

//function to check even numbers
 const isEven = (num)=>{
    if ((num % 2) === 0){
        return num
    } 
 } 
                                                                                                                                     

//create a new array by filter even numbers from the numbers array

let evenNumbers = numbers.filter(isEven)
console.log(evenNumbers)



console.log("this is example 2")
//javascript to illustrate findindex() method

function func(){
    let filtered  = [40,24,33,16,45,76,10,15 ].filter((age)=>age >=18);
    console.log(filtered);
}

func();



//in this example, the method fiter() creates a new array consisting
//of only those elements that satisfy the condition checked by isPositive() 
console.log("example 3")



 let filters = [122,-3,52,0,-1,944].filter((num)=>num >0);
 
 console.log(filters)


//filtering based on consition







