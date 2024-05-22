import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UserInfoPage = () => {

  const {id} = useParams(); // // параметр id из URL!! /users/"id"
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const goBack = ()=>{ 
    navigate(-1)
  };

  const fetchUser = async () => {
    try{
      let res = await fetch(`https://dummyjson.com/users/${id}`)
      let userdata = await res.json()

      setUser(userdata)

    }catch (error){
      console.error(error)
    }
   }

// console.log(user);

  useEffect(() => {
       fetchUser();
  }, [])
  

  return (

    <div className='userInfoPage'>
        
     
          <h5>USER INFO</h5>
          <h6>{user.name}</h6>
                    
          <span>phone: {user.phone}</span>
          <br></br>
          <span>email: {user.email}</span>
          <br></br>
         <span>{user?.company?.name}</span>
          <br></br>
          <span>{user?.address?.address}</span>
          <br></br>
          
          <button onClick={goBack}>Go back</button>

    </div>

  )
}

export default UserInfoPage
