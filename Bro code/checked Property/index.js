//checked= checked property determine the checked state of an 
//        HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if (myCheckBox.checked){
        subResult.textContent = "You are subscribed";
    }
    else{
        subResult.textContent = "You are not subscribed";
        }

    if(visaBtn.checked){
        paymentResult.textContent = "you are paying with visa"
    }
    if(mastercardBtn.checked){
        paymentResult.textContent = "you are paying with mastercard"
    }
    else if(visaBtn.checked){
        paymentResult.textContent = "you are paying with visa"
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = "you are paying with paypal"
    }
}

