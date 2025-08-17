import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import bg from '../assets/Login1.jpg';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Client-side validation
    if (!name.trim()) validationErrors.name = 'Name is required';
    if (!email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!email.includes('@') || !email.includes('.')) {
      validationErrors.email = 'Email must contain "@" and "."';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    } else if (password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    if (!confirmPassword) {
      validationErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear previous errors
    setErrors({});

    // API call to backend
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Sign up successful! You can now log in.');
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        setSuccessMessage('');
        setErrors({ apiError: data.error || 'Signup failed' });
      }
    } catch (error) {
      setSuccessMessage('');
      setErrors({ apiError: 'Network error. Please try again.' });
    }
  };

  return (
    <div className="login-page" style={{ backgroundImage: `url(${bg})` }}>
      <div className="login-content">
        <div className="welcome">
          <h1>Welcome!</h1>
          <p>Already an existing user?</p>
          <Link to="/Login">
            <button className="learn-more">Sign In</button>
          </Link>
        </div>

        <div className="login-box">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}

            {errors.apiError && <p className="error">{errors.apiError}</p>}
            {successMessage && <p className="success">{successMessage}</p>}

            <button type="submit" className="submit-btn">
              Sign Up
            </button>

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

export default SignUp;
