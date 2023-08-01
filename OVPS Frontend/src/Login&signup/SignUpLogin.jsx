import React, { useState } from 'react';
import './Ls.css';
import { useNavigate } from 'react-router-dom';
function SignUpLogin() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleSlide = () => {
    setIsLogin(!isLogin);
  };

  const handleSignupLink = (e) => {
    e.preventDefault();
    setIsLogin(false);
  };

  const handleSubmit = () => {
    console.log("hello")
    navigate("/dash");
  }

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className={`title ${isLogin ? 'login' : 'signup'}`}>Account</div>
        <div className="title signup">Account</div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input
            type="radio"
            name="slide"
            id="login"
            checked={isLogin}
            onChange={handleSlide}
          />
          <input
            type="radio"
            name="slide"
            id="signup"
            checked={!isLogin}
            onChange={handleSlide}
          />
          <label htmlFor="login" className="slide login">
            Login
          </label> 
          <label htmlFor="signup" className="slide signup">
            SignUp
          </label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          <form action="#" className={isLogin ? 'login' : 'signup'} onSubmit={handleSubmit}>
            <div className="field">
              <input type="text" placeholder="Email Address" required />
            </div>
            {!isLogin && (
              <div className="field">
                <input type="text" placeholder="Username" required />
              </div>
            )}
            <div className="field">
              <input type="password" placeholder="Password" required />
            </div>
            {isLogin && (
              <div className="pass-link">
                <a href="#">Reset password?</a>
              </div>
            )}
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value={isLogin ? 'Login' : 'SignUp'}  />
            </div>
            {isLogin ? (
              <div className="signup-link">
                Don't Have Account?{' '}
                <a href="" onClick={handleSignupLink}>
                  Create a New Account
                </a>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpLogin;



