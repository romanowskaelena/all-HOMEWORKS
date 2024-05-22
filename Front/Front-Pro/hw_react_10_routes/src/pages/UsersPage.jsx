import React, { useEffect, useState } from 'react'
import User from '../componets/User'
import { Link } from 'react-router-dom'


const UsersPage = () => {

    const [users, setUsers]= useState([])

    const fetchUsers = async()=>{
        try{
        let res = await fetch('https://jsonplaceholder.typicode.com/users')
        let gotUsers = await res.json()
        setUsers(gotUsers)
        } catch(error){
            console.error('не удалось получить юзеров', error)
        }
    };

    console.log(users)

    useEffect( ()=> {
        fetchUsers()
    }, [])


  return (
    <div className='usersPage'>
        <h1>UsersPage</h1>
       
    {
        users && users.map(item => (
        <Link to={`/${item.id}`} key={item.id}>  

            <User
                key={item.id}   
                name={item.name}
                username={item.username}
                phone={item.phone}
            />

        </Link>
        ))
    }

    </div>

  )

}

export default UsersPage