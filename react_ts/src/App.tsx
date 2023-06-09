import React from 'react';
import './App.css';
import Userdemo from './components/Userdemo';

const users = [
  {
    id:1,
    name:"Hasib",
    age:25
  },
  {
    id:2,
    name:"Shanto",
    age:25
  },
]

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <Userdemo users = {users}/>
      
    </div>
  );
}

export default App;
