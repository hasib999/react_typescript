import { useState } from 'react';
import './App.css';
type User={
  id:number,
  name:string
}
function App() {
  const [users,setUsers] = useState<User>({} as User)
  const [flag,setFlag] = useState<boolean>(false)
  const handleAddUser = () => {
    setUsers({id:1,name:"Hasib"})
    setFlag(true)
  }
  return (
    <div className="App">
      <h1>UseState Hook Props</h1>
      <button onClick={handleAddUser}>Add User</button>
      {flag && <p>Id = {users?.id} , Name = {users?.name} </p> }
    </div>
  );
}

export default App;
