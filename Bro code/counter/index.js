let btnDecrease = document.getElementById("button_decrease")
let btnReset = document.getElementById("button_reset")
let btnIncrease = document.getElementById("button_increase")
let countLabel = document.getElementById("label")
let count = 0;

btnIncrease.onclick = ()=>{
    count++;
    countLabel.textContent = count

}
btnDecrease.onclick=() => {
    count--;
    countLabel.textContent= count
}

btnReset.onclick=()=>{
    count = 0 ;
    countLabel.textContent = count
}