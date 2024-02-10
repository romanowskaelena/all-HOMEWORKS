
// Напишите цикл for, который выводит консоль каждое второе число от 0 до 10
for (let number = 1; number <= 10; number=number+2) 
{
        console.log(number) 
}

// Напишите цикл for, который выводит в консоль  все числа от 55 до 20
    for (let number = 55;  number >= 20; number=number-1) 
{
        console.log(number)
} 

// Дан массив. Вывести в консоль все числа из массива
// Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат
const numbers = [3, 5, 11, 2, 8, 1, 6]
    console.log(numbers)

let numbers_squared = []
for (let index = 0; index <= numbers.length; index=index+1) 
{ 
    numbers_squared.push(numbers[index**2])           
}
console.log(`result: ${numbers_squared}`)


// Создать переменную last_elem и присвоить ей последний элемент из сформированного массива numbers_squared 
// (обратиться к элементу массива по индексу)

let last_elem = numbers_squared[numbers_squared.length-1]
console.log(`Последний элемент = ${last_elem}`)


//Дан объект user. Используя данные из объекта, сформировать строку 
// в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. 
// He is <AGE> years old’

const user = {
    first_name: 'Ivan', 
    last_name: 'Ivanov', 
    age: 20, 
    salary: 500
}
console.log(`User’s name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`)

