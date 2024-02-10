//Написать цикл, который создает множество параграфов с каждым десятым 
//числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). 
//Добавить созданные параграфы в div с классом numbers.
const newDiv = document.createElement("div")
console.log(newDiv)

for (let i = 100; i > 50; i=i-10) {
  const tenElem = document.createElement("p")
  tenElem.innerText = i
  newDiv.append(tenElem)
}


//Написать цикл, который проходится по массиву строк, для каждой строки 
//создает параграф и добавляет его в div с классом strings_container. 
//Строки взять произвольные.
const nDiv = document.createElement("div")
console.log(nDiv)

const arrayStr = ['one', 'two', 'three', 'four']
for (let i = 0; i < arrayStr.length; i++) {
    const newElem = document.createElement("p")
    newElem.innerText = arrayStr[i]
    nDiv.append(newElem) 
}


//Написать цикл, который проходится по массиву с объектами - у объектов 
//свойства first_name, last_name и  age (данные взять произвольные) - 
//и создает карточки только для совершеннолетних пользователей. 
//Карточка должна содержать информацию об имени, фамилии и возрасте 
//пользователя. Добавить все карточки в div с классом users_container.

const users = [ 
{
first_name: 'John',
last_name: 'Johsons',
age: 17
},
{
  first_name: 'Anna',
  last_name: 'Hepbern',
  age: 40
},
{
  first_name: 'Denis',
  last_name: 'Halloween',
  age: 30
},
]

const users_container = document.createElement("div")
console.log(users_container)

for (let index = 0; index < users.length; index++) {
if(users[index].age >= 18) {
  const card = document.createElement("p")
  card.innerText = `Cовершеннолетний пользователь: ${users[index].first_name} ${users[index].last_name}`
  users_container.append(card)
}
}


