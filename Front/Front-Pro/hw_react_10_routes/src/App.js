import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import UserInfoPage from './pages/UserInfoPage';
import ErrorPage from './pages/ErrorPage';



const App = () => {
 
  return (
// { BrowserRouter } импортируем в index.js  

   <Routes>

      <Route path='/' element={<UsersPage/>} />
      <Route path='/:id' element={<UserInfoPage/>} />
      <Route path='*' element={<ErrorPage/>} />

   </Routes>

  )

}

export default App;

// ДЗ 
// Нужно создать лист пользователей используя api: https://jsonplaceholder.typicode.com/users

// Сначала отображаем только имя и фамилия, пользователя ниже номер телефона.

// Далее при нажатии на имя и фамилия переходим в новую страницу, где будет уже остальное информация, address, company, name, email и т.д.

// Создать кнопку назад тоже

