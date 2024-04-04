// ====== hw
/* Задача: Создание контактного списка с использованием API RandomUser.me

Получение данных из API RandomUser.me:

Используйте запрос к API RandomUser.me для получения случайных пользовательских данных.

Пример запроса: https://randomuser.me/api/?results=10 (этот запрос вернет 10 случайных пользователей).

Вывод данных на странице:

-Создайте HTML-разметку для отображения списка контактов.

-После получения данных из API, обработайте их и выведите информацию о каждом пользователе на странице.

-Например, вы можете отобразить имя, фамилию, номер телефона

Добавление функционала поиска:

-Создайте поле ввода для поиска контактов.

-Напишите JavaScript-функцию для обработки ввода пользователя.

При вводе текста в поле поиска, фильтруйте список контактов в соответствии с введенным текстом и отображайте только соответствующие контакты.
*/

let dataUsers = []

const fetchData = async(url) => {
    try 
    {   let res = await fetch(url);
        let data = await res.json();
    return data
    } catch (error) {
      console.log(error);
    }
}

let container = document.querySelector('.contacts__container');
let renderedDiv = document.querySelector('.renderedDiv');

// полученные данные 10 юзеров, отрисовка 
function renderedUsers(dataUsers) {

    renderedDiv.innerHTML = '';

    dataUsers.forEach(user => {
        let contactItem = document.createElement('div')
            contactItem.classList.add('contact__item')

        let image = document.createElement('img');
            image.classList.add('contact__itemimg');
            image.src = user.picture.thumbnail;
        
        let contactItemData = document.createElement('div')
            contactItemData.classList.add('contact__item__data')
    
        let firstname = document.createElement('span')
            firstname.classList.add('firstname')
            firstname.innerText = user.name.first
    
        let lastname = document.createElement('span')
            lastname.classList.add('lastname')
            lastname.innerText = user.name.last
    
        let phone = document.createElement('p')
            phone.classList.add('number')
            phone.innerText = user.phone
    
        contactItemData.append(firstname, lastname, phone)
    
        contactItem.append(image, contactItemData)
        
        container.append(contactItem)
    }); 
}

// получение данных, ответ API
const render = async () => {
        let dataAll = await fetchData("https://randomuser.me/api/?results=10");
        console.log(dataAll); 
        /*  dataAll Полный ответ API =
                {
                "results": [...], //  данные 10 пользователей
                "info": {...} // Дополнительная информация
                }    
        */
    dataUsers = dataAll.results // доступ к массиву 10 юзеров

    renderedUsers(dataUsers);
};

render();


// поиск 
let searchInput = document.querySelector('.searchInput');
searchInput.addEventListener('keyup', (event) => searchUsers(event))

function searchUsers(event) {
     let inputValue = event.target.value;

     let filteredUsers = dataUsers.filter(user => 
        user.name.first.toLowerCase().includes(inputValue) ||
        user.name.last.toLowerCase().includes(inputValue) ||
        user.phone.includes(inputValue)
       );    
    
    renderedUsers(filteredUsers);
 };
