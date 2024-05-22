import React from 'react'

const User = (props) => {


  return (

    <div className='userItem'>
            <h5>{props.name}</h5>
            <h3>username: " {props.username} "</h3>
            <span>phone: {props.phone}</span>
    </div>


  )
}

export default User