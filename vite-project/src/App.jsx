import './App.css';
import React, { useState } from 'react'

const App = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [submit, setsubmit ] = useState(false);
  const handlesubmit = (e) =>{
    e.preventDefault();
  }

  if(!setUser && !setPassword){
    setMessage('Both fields are required');
    setError(true);
    return;
  }
  if(setUser && setPassword){
    setMessage('Welcome, `${user}`!');
    setError(false);
  }
  

  return (
    <div>
      <div>
        <h1>Login Page</h1>
      </div>
      <div>
        <form action="">
          <label htmlFor="username">Username:</label>
          <input type="text" placeholder='username' value={user}  />
          <label htmlFor="password">Password:</label>
          <input type="text" placeholder='password' value={password} />
          <button type="submit" onClick={handlesubmit}>Login</button>
        </form>
        <div>
          {message}
        </div>
      </div>
    </div>
  )
}

export default App
