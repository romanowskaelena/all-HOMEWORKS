// alert("hello");
// для проверки - алерт. 
// в браузере ctrl+u (или просмотр кода правой кнопкой)
//  - на ссылке - открыть в новой вкладке


// ЗАДАЧА 1

// Создай функцию calculateSquare(), которая будет принимать значение из поля ввода и выводить квадрат этого числа в
// элемент с классом result. Например, если введено число 5, то функция должна вычислить квадрат числа 5 (25) и вывести
// результат в элемент с классом result ("Результат: 25")

let userInput = document.querySelector(".input");
function calculateSquare() {
    let inputValue = +userInput.value;
    let squareResult = inputValue*inputValue;
    
    // console.log("Результат: " + squareResult);
      
    document.querySelector(".square-result").innerText = "Результат: " + squareResult;
}

// Создай функцию checkEvenOdd(), которая будет принимать значение из поля ввода и выводить сообщение о том,
// является ли число четным или нечетным. Если число четное, то функция должна вывести сообщение "Число <значение> является четным",
// а если число нечетное, то сообщение "Число <значение> является нечетным". Например, если введено число 7, то функция должна
// вывести сообщение "Число 7 является нечетным".

// let userInput = document.querySelector(".input");
function checkEvenOdd() {
    let inputValue = +userInput.value;
    if (inputValue % 2 === 0) {
        document.querySelector(".even-odd").innerText = "Число " + inputValue + " является четным"
    } else {
        document.querySelector(".even-odd").innerText = "Число " + inputValue + " является Нечетным"
    }
}


// Продолжить функцию zoom() на экране у нас есть изображение размером w = 200, h = 200. при каждом клике изображения увеличивайте
// его размер на 50 (w+ = 50, h + = 50). Если в результате очередного клика размер изображения превышает 500, то во время всех
// последующих кликов уменьшайте размер изображения на 50:


let isToggle = true; // флаг
let clickCount = 0;
let img = document.querySelector(".gallery img");
function zoom() {
    let maximum = 500;
    let increase = 50;

    if (isToggle) { // true, then
        img.width = img.width + increase;
        img.height = img.height + increase;
    
        if (img.width > maximum && img.height > maximum ) {
            isToggle = false;
        }
    } else {
        img.width = img.width - increase;
        img.height = img.height - increase;
        if  (img.width <= 200 && img.height <= 200) {
            isToggle = true;
        }
    }
    clickCount++;
}


 


// ЗАДАЧА 2

// Задача состоит в создании формы выбора курсов для студента, где студент может выбрать различные модули: Frontend, Backend и Design,
// а затем выбрать конкретные курсы из каждого модуля. Каждый курс имеет свою стоимость. Студент также должен указать количество приобретаемых курсов.


// После выбора курсов и указания количества, при нажатии кнопки должна отобразиться общая стоимость выбранных курсов.
// Если общая стоимость превышает $3000, студенту предоставляется 30% скидка, и должна отобразиться окончательная сумма со скидкой.


// Например, если студент выбрал курсы JavaScript, PHP и Photoshop, каждый со своей стоимостью, и указал количество 12,
// то должна быть рассчитана общая стоимость (сумма стоимостей каждого выбранного курса, умноженная на количество) и отображена на экране.
// Если общая стоимость превышает $3000, то должна быть применена скидка в размере 30%, и должна быть показана окончательная сумма со скидкой.


// Например, сообщение на экране может быть: "Уважаемый студент, вы должны заплатить $5400". Если общая стоимость превышает $3000,
// то сообщение может быть: "Уважаемый студент, вы должны заплатить $5400, но вы получаете 30% скидку, и окончательная сумма составляет $3780".

function getSum(){
    let valueFrontend = document.querySelector("#Frontend").value;
    let valueBackend = document.querySelector("#Backend").value;
    let valueDesign = document.querySelector("#Design").value;

    let frontInput = +document.querySelector(".frontInput").value;
    let backInput = +document.querySelector(".backInput").value;
    let desInput = +document.querySelector(".desInput").value;
   
    let sumFront = valueFrontend * frontInput;
    let sumBack = valueBackend * backInput;
    let sumDes = valueDesign * desInput;


    let sumCourses =  sumFront + sumBack + sumDes;

    if (sumCourses > 3000) {
        let finalPrice = sumCourses * 30/100; 

        document.querySelector(".finalPrice").innerText = 'С учетом скидки в 30% окончательная цена для Вас = $ ' + finalPrice;
    }

    document.querySelector(".sumCourse").innerText = 'Уважаемый студент, цена выбранных курсов = $  ' + sumCourses;

    


};



// 