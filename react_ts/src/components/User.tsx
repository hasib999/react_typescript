import React from 'react'

//string, number, boolean, void, null
//user defined types -> object, array, enum, union, any, custom type

type UserProps = {
    name:string,
    age:number,
    isRegistered:boolean
}

const User = ({name,age,isRegistered}:UserProps) => {
  return (
    <div>
        <h2>Name: {name}</h2>
        <p>Age: {age} Years Old</p>
        {isRegistered? <p>Registered User</p>: <p>Not Registered User</p>}
    </div> 
  )
}

export default User