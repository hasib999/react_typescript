import React from 'react';
import './App.css';
import User from './components/User';

const user1={
  name:"Hasib Shanto",
  age:25, 
  isRegistered:true,
  lang:["Bangla","English"]
}
const user2={
  name:"Yeasif Arnab",
  age:26, 
  isRegistered:false,
  lang:["Bangla","English"]
}

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <User user={user1}/>
      <User user={user2}/>
      
    </div>
  );
}

export default App;
