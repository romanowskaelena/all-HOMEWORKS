// 1Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.
{const butElem = document.createElement("button")
butElem.innerText = "изменить красный"
document.body.append(butElem)

const sqElem = document.createElement("div")
sqElem.innerText = "красный квадрат"
sqElem.classList.add("red")
document.body.append(sqElem)
let flag = false
butElem.addEventListener("click", function () {
    sqElem.classList.toggle("green")
    if (!flag ) { 
    sqElem.innerText = "зеленый квадрат"
    butElem.innerText = "изменить зеленый"
    flag = true} 
    else {sqElem.innerText = "красный квадрат"
    butElem.innerText = "изменить красный"
    flag = false }
}) }

// 2Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.
{const butElem2 = document.createElement("button")
butElem2.innerText = "изменить"
document.body.append(butElem2)

const sqElem2 = document.createElement("div")
sqElem2.classList.add("pink")
document.body.append(sqElem2)

butElem2.addEventListener("click", function () {
    sqElem2.classList.toggle("blue")
    console.log("blue")
})}

// 3Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.
{
let size = 150
const butElem3 = document.createElement("button")
butElem3.innerText = "изменить квадрат"
document.body.append(butElem3)

const sqElem3 = document.createElement("div")
sqElem3.innerText = "квадрат"
sqElem3.style.width = size + "px"
sqElem3.style.height = size + "px"
sqElem3.style.backgroundColor = "grey"
document.body.append(sqElem3)

butElem3.addEventListener("click", function() {
    sqElem3.style.width = size+20+"px"
    sqElem3.style.height = size+20+"px"
})}

// 4Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.
{const butElem4 = document.createElement("button")
butElem4.innerText = "paragraf"
document.body.append(butElem4)

const divElem4 = document.createElement("div")
divElem4.classList.add("root")
document.body.append(divElem4)

butElem4.addEventListener("click", function() {
    const par = document.createElement("p")
    par.innerText = " В фантастической сказке Искандера удавы и кролики — при полной, вроде бы, своей противоположности — составляют единое целое. Возникает особый симбиоз."
    par.style.color = "blue"
    divElem4.appendChild(par)
})}

// 5Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.
{const butElem5 = document.createElement("button")
butElem5.innerText = "paragraf2"
document.body.append(butElem5)

const divElem5 = document.createElement("div")
divElem5.classList.add("root")
document.body.append(divElem5)

let flag = true
butElem5.addEventListener("click", function() {
    const par = document.createElement("p")
    par.innerText = "«Потому что кролик, переработанный удавом, — как размышляет Великий Питон, — превращается в удава. Значит, удавы — это кролики на высшей стадии своего развития. Иначе говоря, мы — это бывшие они, а они — это будущие мы»"
    if (flag) {
    par.style.color = "blue" 
    flag = false}
    else {par.style.color = "green" 
    flag= true } 
    
    divElem5.appendChild(par)
    
})}

