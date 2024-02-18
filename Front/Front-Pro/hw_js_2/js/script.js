// alert("hello");
// для проверки - алерт. 
// в браузере ctrl+u (или просмотр кода правой кнопкой)
//  - на ссылке - открыть в новой вкладке


// ДОМАШКА

// Создать 3 input полей и также 4 кнопки, каждая кнопка будет выполнять определённое действие и будет вызывать свой метод

// Создать функцию checkEquality с помощью которого проверяем равны ли все 3 значение внутри input-ов или нет
// Например если 3, 3, 3 то в результате должны получать "Все поле равны" если нет то пишем "Все поле не равны"

function checkEquality(){
    let value1 = +document.querySelector(".input-1").value;
    let value2 = +document.querySelector(".input-2").value;
    let value3 = +document.querySelector(".input-3").value;

    if(value1 == value2 && value1 == value3){
        document.querySelector(".resultEquality").innerText = `все поля равны`;
    } else {
        document.querySelector(".resultEquality").innerText = `все поля не равны`;
    }
}

// Создать функцию hasZero с помощью которого проверяем есть ли поле которое равно 0 если есть пишем "Да, есть", если нет пишем просто "Нет"
// Например если будет 1, 2, 0 то результат будет "Да, есть", а если будет 1, 2, 3 то результат "Нет"

function hasZero(){
    let value1 = +document.querySelector(".input-1").value;
    let value2 = +document.querySelector(".input-2").value;
    let value3 = +document.querySelector(".input-3").value;

    if (value1 == 0 || value2 == 0 || value3 == 0) {
        document.querySelector(".resultZero").innerText = `да, есть нули`;  
    } else {
        document.querySelector(".resultZero").innerText = `нет нулей`; 
    }
}


// Создать функцию sameOne с помощью которого проверяем есть ли поле которое совпадают, если есть пишем "Да, есть", если нет пишем просто "Нет"
// Например если будет 1, 1, 0 то результат будет "Да, есть", а если будет 1, 2, 3 то результат "Нет"

function sameOne(){
    let value1 = +document.querySelector(".input-1").value;
    let value2 = +document.querySelector(".input-2").value;
    let value3 = +document.querySelector(".input-3").value;

    if (value1 == value2 || value1 == value3 || value2 == value3) {
        document.querySelector(".resultSame").innerText = `да, есть совпадения`;  
    } else {
        document.querySelector(".resultSame").innerText = `нет совпадений`; 
    }
}

// Создать функцию sortNumbers которая будет сортировать три числа в порядке возрастания
// Например если 3, 4, 2 то в результате получим "2 3 4"

function sortNumbers(){
    let value1 = +document.querySelector(".input-1").value;
    let value2 = +document.querySelector(".input-2").value;
    let value3 = +document.querySelector(".input-3").value;

    let result;

    if (value1 > value2) {
        result = value1; // поменять местами
        value1 = value2; // 
        value2 = result; // 
    } 

    if (value2 > value3) {
        result = value2; // поменять местами
        value2 = value3; // 
        value3 = result;
    }

    if (value1 > value2) {
        result = value1; // поменять местами
        value1 = value2; // 
        value2 = result;
    }
     document.querySelector(".resultSort").innerText = `${value1} , ${value2} , ${value3} `;    
    }
    

// ЗАДАЧА 2

//FORM exam result

function getExamResult() {
    let score = 0; 

    let num1 = Number(document.querySelector(".exam-1").value);
    let num2 = Number(document.querySelector(".exam-2").value);
    let num3 = Number(document.querySelector(".exam-3").value);
    let num4 = Number(document.querySelector(".exam-4").value);
    let num5 = Number(document.querySelector(".exam-5").value);

    let num6 = Number(document.querySelector(".exam-6").value);
    let num7 = Number(document.querySelector(".exam-7").value);
    let num8 = Number(document.querySelector(".exam-8").value);
    let num9 = Number(document.querySelector(".exam-9").value);
    let num10 = Number(document.querySelector(".exam-10").value);
   

    if (num1 === 15) {
        score = score + 2; // 0 + 2 = 2

        document.querySelector(".exam-1").style.border = "1px solid green";
    } else { 
        document.querySelector(".exam-1").style.border = "1px solid red";
    }

    if (num2 === 10) {
        score = score + 2; // 2 + 2 = 4

        document.querySelector(".exam-2").style.border = "1px solid green";
    } else {
        document.querySelector(".exam-2").style.border = "1px solid red";
    }

    if (num3 === 12) {
        score = score + 2;

        document.querySelector(".exam-3").style.border = "1px solid green";
    } else {
        document.querySelector(".exam-3").style.border = "1px solid red";
    }

    if (num4 === 36) {
        score = score + 2;

        document.querySelector(".exam-4").style.border = "1px solid green";
    } else {
        document.querySelector(".exam-4").style.border = "1px solid red";
    }

    if (num5 === 1) {
        score = score + 2;

        document.querySelector(".exam-5").style.border = "1px solid green";
    } else {
        document.querySelector(".exam-5").style.border = "1px solid red";
    }

    if (num6 === 10) { //
        score = score + 2;

        document.querySelector(".exam-6").style.border = "1px solid green";
    } else {
        document.querySelector(".exam-6").style.border = "1px solid red";
    }

    if (num7 === 4) { //
        score = score + 2;

        document.querySelector(".exam-7").style.border = "1px solid green";
    } else {
        document.querySelector(".exam-7").style.border = "1px solid red";
    }

    if (num8 === 9) { //
            score = score + 2;
    
        document.querySelector(".exam-8").style.border = "1px solid green";
    } else {
        document.querySelector(".exam-8").style.border = "1px solid red";
    }        

    if (num9 === 60) { //
        score = score + 2;

        document.querySelector(".exam-9").style.border = "1px solid green";
    } else {
        document.querySelector(".exam-9").style.border = "1px solid red";
    } 

    if (num10 === 10) { //
        score = score + 2;

        document.querySelector(".exam-10").style.border = "1px solid green";
    } else {
        document.querySelector(".exam-10").style.border = "1px solid red";
    } 

    if (score >= 18) {
        document.querySelector(".result").innerText = `Your get ${score} scores, exellent result!`;
    }

    if (score >= 12 && score <= 17) {
        document.querySelector(".result").innerText = `Your get ${score} scores, good result!`;
    }

    if (score >= 8 && score <= 11) {
        document.querySelector(".result").innerText = `Your get ${score}, satisfactory score`;
    }

    if (score <=7) {
        document.querySelector(".result").innerText = `Your get ${score}, unsatisfactory score :(`;
    }

}

// Продолжить задачу по тестам, добавить возможность проверка, добавить еще 5 полей чтобы окончательный результат было 20

// Если ученик получил 18 >, то мы отображаем текст "Вы получили 18, отлично"

// Если ученик получил от 12 до 18, то мы отображаем текст "Вы получили 16, хорошо"

// Если ученик получил от 8 до 12, то мы отображаем текст "Вы получили 11, удовлетворительно"

// Если ученик получил до 8, то мы отображаем текст "Вы получили 7, неудовлетворительно"
