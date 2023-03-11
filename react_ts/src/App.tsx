import React from 'react';
import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <User name="Hasib Shanto" age={25} isRegistered={true}/>
      <User name="Yeasif Arnab" age={26} isRegistered={false}/>
    </div>
  );
}

export default App;
