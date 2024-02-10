// Напишите функцию, которая принимает два числовых аргумента 
//и возвращает наименьшее из них.
console.log (`----------task 1-----------`)

function numMin (a, b) 
{
    if (a>b) {return b}
    else {return a}    
}
let result = numMin(10, 20)
console.log(`наименьшее число = ${result}`)


//  функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
console.log (`----------task 2-----------`)

function num(a, b) 
{
    if (a>b) {
    for (let index = a; index >= b; index--) 
       if (index%2===0) {console.log(index)}
    }

    if (b>a) {
        for (let index = b; index >= a; index--) 
           if (index%2===0) {console.log(index)}
        } 
}
num(20, 30)


//Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2`)
console.log (`----------task 3-----------`)
function power(a) {
    console.log(a**2)
}
power(3)


// Напишите функцию, которая принимает числовой 
// аргумент n и считает сумму чисел от 1 до n.
console.log (`----------task 4-----------`)

function countN(n) {
    let sum = 0
        for (let index = 1; index <= n; index++) {
        sum += index    }
    return sum
}
let result2 = countN(5)
console.log(`сумма чисел от 1 до n = ${result2}`)


// Напишите функцию, которая принимает два 
// числовых аргумента n и m и 
// считает сумму четных чисел и нечетных чисел от n до m. 
//  Суммы выведите в консоль. 
//  (в начале сумму четных чисел, а затем сумму нечетных).
console.log (`----------task 5-----------`)

function countSum(n, m) {
    let sumEv = 0
    let sumOdd = 0
    for (let index = n; index <= m; index++) {
        if (index%2===0) {
        sumEv += index }
        else { sumOdd += index } 
    }
    console.log(`Сумма четных чисел: ${sumEv}`)
    console.log(`Сумма нечетных чисел: ${sumOdd}`) 
}
countSum(1, 15)

/*
 Напишите функцию, которая принимает в качестве 
аргументов массив строк, а возвращает 
первый самый длинный элемент массива. 
Если входной массив пуст, функция возвращает null. 
Если есть несколько одинаковых по длине 
элементов - функция возвращает первый из этих элементов. 
 Пример: [ 'one', 'two', 'three' ] => 'three' 
*/

console.log (`----------task 6-----------`)

let arr = [ 'one', 'two', 'three', 'four', 'fifteen' ]
let arr2 = []
function findElem(arr) {
    let longest = arr[0]
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].length > longest.length) {
            longest = arr[index] 
        }
     } return longest
}

let resultElem = findElem (arr)
console.log(`самый длинный элемент ${resultElem}`)
