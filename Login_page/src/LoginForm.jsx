import React from "react";
import "./LoginForm.css";

function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-box">
        <span className="close-btn">&times;</span>
        <h2>Login Form</h2>

        <form>
          <label>Email or Phone</label>
          <input type="text" placeholder="Enter email or phone" required />

          <label>Password</label>
          <input type="password" placeholder="Enter password" required />

          <a href="#" className="forgot-link">Forgot Password?</a>

          <button type="submit" className="login-btn">LOGIN</button>

          <p className="signup-text">
            Not a member? <a href="#">Signup now</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
