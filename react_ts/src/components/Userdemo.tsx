import React from 'react'
type UserDemoProps = {
    users: {
        id: number;
        name: string;
        age: number;
    }[]
}
const Userdemo = ({users}:UserDemoProps) => {
  return (
    <div>
        {users.map((user)=>{
            return(
                <div>
                    <h2>{user.id}</h2>
                    <h2>{user.name}</h2>
                    <h2>{user.age}</h2>
                </div>
            )
        })}

    </div>
  )
}

export default Userdemo