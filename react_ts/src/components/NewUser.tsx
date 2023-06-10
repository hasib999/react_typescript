import React, { useState,MouseEvent,ChangeEvent } from 'react'

const NewUser = () => {
    const [userName, setUserName] = useState("")
    const handleUserNameChange = (event:ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value)
    }
    const handleShowName = (event:MouseEvent<HTMLButtonElement>) =>{
        console.log(userName)
    }
  return (
    <div>
        <h1>Create New User</h1>
        <input type="text" placeholder='Enter user name' value={userName} onChange={handleUserNameChange}/>
        <button onClick={handleShowName}>Show Name</button>
        <p>
            {userName}
        </p>
    </div>
  )
}

export default NewUser