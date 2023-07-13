import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='top'>

    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <Link to="/home">

        <button type="submit">Login</button>
        </Link>
      </form>

      <div className="login-container-bottom">

      <h5>Don't have an account?
      <Link to="/signup">
      <p style={{color:"green"}}> Sign Up</p>
      </Link>
      </h5>
      
    </div>
  </div>
    </div>
    
    
  );
  
  
};

export default Login;
