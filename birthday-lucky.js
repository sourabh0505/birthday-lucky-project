const dateofbirth = document.querySelector("#date-of-birth");
const luckynumber = document.querySelector("#lucky-number");
const clickbutton = document.querySelector("#click-btn");
const outputmessage = document.querySelector("#output-message");

function compareValues(sum,luckynumber){
    if(sum % luckynumber ==0){
        outputmessage.innerText = ("The birth date is lucky 🎊 ");
    }
    else{
       outputmessage.innerText = ("The birth date is not lucky 😔");
    }
    return sum;
}    

function checkBirthDateislucky() {
    const date = dateofbirth.value;
    const sum = CalculateSum(date);
    compareValues(sum,luckynumber.value)
}

function CalculateSum(date) {
    date = date.replaceAll("-","");
    let sum = 0;
    for(let i=0;i<date.length;i++){
        sum = sum + Number(date.charAt(i));
    }
    return sum;
}

clickbutton.addEventListener("click", checkBirthDateislucky);