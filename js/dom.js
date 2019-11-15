
const display = document.querySelector('.calc .display');

let numbers = document.querySelectorAll('.number');
let operations = document.querySelectorAll('.opers');
let clearNum = document.getElementById('clear');
let delNum = document.getElementById('del');
let equal = document.getElementById('eq');
const disp = document.getElementById('display');

for (let i=0; i<numbers.length; i++){
    let number = numbers[i];
    number.addEventListener('click', function(e){
        clickOnANumbers(e.target.textContent);
    });
}

for (let i=0; i<operations.length; i++){
    let operation = operations[i];
    operation.addEventListener('click', function(e){
        operationsOnNumbers(e.target.textContent);
    });
}

clearNum.addEventListener('click', clickOnClear);
delNum.addEventListener('click', clickOnDelete);
equal.addEventListener('click', clickOnEqual);

function clickOnANumbers(number){
    if (disp.value === '0'){
        disp.value = number;
    } else {
        disp.value += number;
    }
}

function operationsOnNumbers(){
    const btnText = event.target.innerText;
    disp.value += btnText;
}

function clickOnClear(id){
    id === 'C';
    disp.value = '0';
}

function clickOnDelete(){

}

function clickOnEqual(){
    disp.value = eval(disp.value);
}






