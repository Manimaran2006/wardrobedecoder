import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoIosHome } from 'react-icons/io';
import './Login.css';

const Login = () => {
  const [action, setAction] = useState('');

  const registerLink = (e) => {
    e.preventDefault();
    setAction('active');
  };

  const loginLink = (e) => {
    e.preventDefault();
    setAction('');
  };

  return (
    <div className="Login-Register">
      <Link to="/home"><IoIosHome className="Home-Icon" /></Link>
      <div className={`wrapper ${action}`}>
        <div className="form-box login">
          <form>
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>

            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>

            <div className="remember-forget">
              <label><input type="checkbox" /> Remember Me</label>
              <a href="#">Forget password?</a>
            </div>

            <button type="submit">Login</button>

            <div className="register-link">
              <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <form>
            <h1>Registration</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>

            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <FaEnvelope className="icon" />
            </div>

            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>

            <div className="remember-forget">
              <label><input type="checkbox" /> I agree to the terms & conditions</label>
            </div>

            <button type="submit">Register</button>

            <div className="register-link">
              <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
