import './App.css';
import React, { useState } from 'react'

const App = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));

    if(!user.username || !user.password){
      setMessage('Both fields are required');
      setError(true);
      console.log("Both fields are required");
      return;
    }
    if(user.username === "user" && user.password  === "password"){
      setMessage(`Welcome, ${user.username}!`);
      setError(false);
    }
    else
    {
    setMessage('Invalid username or password');
    console.log("Invalid username or password");
    setError(true); 
    }
  };

  const handleChange = (e) =>{
    setUser({...user,[e.target.name]: e.target.value})
  }



  return (
    <div style={{
      border: '10px solid green',width: "170%", height: "70%",borderRadius:"10px"
    }}>
      <div>
        <h1 style={{ color: 'gold' }}>Login Page</h1>
      </div>
       <p>{message && (
          <h3 style={{ color: error ? 'red' : 'green' }}>
            {message}
          </h3>
        )} </p>
      <div>
      </div>
      <div style={{lineHeight: '3', color: "rose", fontSize:'20px'}}>
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
          <div>
          <label style={{ fontSize:"30px"}} htmlFor="username">Username: </label>
          <input style={{ padding: '10px'}} id='username' name='username' type="text" placeholder='username' value={user.username} onChange={handleChange} required />
          </div>
          <div>
          <label style={{ fontSize:"30px"}} htmlFor="password">Password: </label>
          <input style={{ padding: '10px'}} id='password' name='password' type="password" placeholder='password' value={user.password} onChange={handleChange} required />
          </div>
          <div>
          <button style={{ padding: '10px', margin:"10px 40px 0 30%", border:"2px solid red", borderRadius:"5px"}} type="Submit" >Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
