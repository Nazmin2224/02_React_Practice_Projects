import React, { useState } from 'react';
import './Login.css';
import bg from '../assets/login1.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    const validationErrors = {};
    if (!username.trim()) {
      validationErrors.username = 'Username is required';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    } else if (password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      
      // API call for login
    }
  };

  return (
    <div className="login-page" style={{ backgroundImage: `url(${bg})` }}>
      <div className="login-content">
        <div className="welcome">
          <h1>Welcome!</h1>
          <p>Don't Have an Account? Create One</p>
          <Link to="/SignUp">
            <button className="learn-more">Sign Up</button>
          </Link>
        </div>

        <div className="login-box">
          <h2>Sign in</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <p className="error">{errors.username}</p>}

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}

            <button type="submit" className="submit-btn">Submit</button>

            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
