import React from 'react'

//string, number, boolean, void, null
//user defined types -> object, array, enum, union, any, custom type

type UserProps = {
    user: {
        name: string;
        age: number;
        isRegistered: boolean;
        lang: string[];
    }
}

const User = ({user}:UserProps) => {
  return (
    <div style={{border:"1px solid",margin:"0.5rem"}}>
        <h2>Name: {user.name}</h2>
        <p>Age: {user.age} Years Old</p>
        {user.isRegistered? <p>Registered User</p>: <p>Not Registered User</p>}
        <p>Speaks:
            {user.lang.map((language,index)=>{
                return <li key={index}>{language}</li>
            })}
        </p>
    </div> 
  )
}

export default User