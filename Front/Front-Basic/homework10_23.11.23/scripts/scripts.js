////=======Домашнее задание 10==========
// не могу найти ошибку. тип фамилия андэфайнд

//Создать в html форму с тремя инпутами (имя, фамилия, возраст). Написать скрипт, который при отправке формы выводит собранные данные в консоль.
const formElem = document.querySelector(".user")

const arrayUsers = []

formElem.addEventListener("submit", function(event) {
    event.preventDefault();
    const nameElem = document.querySelector(".name")
    const surnameElem = document.querySelector(".surname")
    const ageElem = document.querySelector(".age")
    console.log(nameElem.value, surnameElem.value, ageElem.value)
    
// Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта.

const user = {
    name: nameElem.value,
    surname: surnameElem.value,
    age: ageElem.value}

arrayUsers.push(user)
console.log(arrayUsers)
formElem.reset()
rerender() 
})

// Реализовать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива. Настроить rerender при добавлении нового пользователя.
const divElem = document.querySelector(".container")
function creatProductCard({name, lastname, age}) 
{
    const newCard = document.createElement("div")
    newCard.className = "newCard"
    const parName = document.createElement("p")
    const parSurname = document.createElement("p")
    const parAge = document.createElement("p")
    parName.innerText = name
    parSurname.innerText = lastname
    parAge.innerText = age
    newCard.append(parName, parSurname, parAge)
    return newCard
}

function rerender() 
{
    const divUserCard = document.querySelector(".userCards")
    // очищаем контейнер с карточками//
    divUserCard.innerHTML = ""
    for(let i = 0; i < arrayUsers.length; i++) {
        const userCard = creatProductCard(arrayUsers[i])
        divUserCard.append(userCard)

// Доработать rerender таким образом, чтобы при двойном клике по карточке из массива удалялся пользователь по id и вызывался rerender.
        userCard.addEventListener("dblclick", function() {
            arrayUsers.splice(i, 1)
            rerender()
            })
    }
}

rerender()


