// variable in javascript
//var in javascript
function example(){
    //var x = 10;
    if(true){
        var x = 20;
        console.log(x);  //output:20
    }
    console.log(x);     //output; 20
}

example();

// let in javascript

function exampleLet(){
    let x = 10;
    if(true){
        let x = 20;
        console.log(x);      //output:20
    }
    console.log(x);          //output: 10
}

exampleLet();


//const example 
function exampleConst() {
    const x = 10;
    if(true) {
        const x = 20 ;
        console.log(x);     //output:20
    }
    console.log(x);       //output:10

}

exampleConst();