// alert("hello");


// minus-subtract
function minus() {
    let inputValue = +document.querySelector(".input-3").value;
    let inputValue2 = +document.querySelector(".input-4").value;

    let result = inputValue - inputValue2;
    
    document.querySelector(".result-3").innerText =  inputValue + "-" + inputValue2 + "=" + result;
}


// add
function add() {
    let inputValue3 = Number(document.querySelector(".input-5").value);
    let inputValue4 = Number(document.querySelector(".input-6").value);

    let resultAdd = inputValue3 + inputValue4; 
    
    document.querySelector(".result-5").innerText =  inputValue3 + "+" + inputValue4 + "=" + resultAdd;
}

// multiply
function multiply() {
    let inputValue6 = Number(document.querySelector(".input-77").value);
    let inputValue7 = Number(document.querySelector(".input-7").value);

    let resultMulti = inputValue6 * inputValue7; 

    document.querySelector(".result-7").innerText = inputValue6 + " * " + inputValue7 + " = " + resultMulti;
}


// divide
function divide()  {
    let inputValue88 = Number(document.querySelector(".input-88").value);
    let inputValue8 = Number(document.querySelector(".input-8").value);

    let resultDevide = inputValue88 / inputValue8;

    document.querySelector(".result-8").innerText = inputValue88 + " / " + inputValue8 + " = " + resultDevide;
}

// getMinutes
function getMinutes() {
    let inputValue9 = Number(document.querySelector(".input-9").value);

    let resultMinutes = inputValue9 * 60;

    document.querySelector(".result-9").innerText = inputValue9 + " часов" + " = " + resultMinutes + " минут";
}

//  Average 
function calculateAverage() {
    let inputValue1010 = Number(document.querySelector(".input-1010").value);
    let inputValue10 = Number(document.querySelector(".input-10").value);

    let resultSum = inputValue1010 + inputValue10;
    let resultAverage = resultSum / 2;

    document.querySelector(".result-10").innerText = inputValue1010 + " + " + inputValue10 + " = " + resultSum + " / " + " 2 " + " = " + resultAverage;
}


