import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-heading">Login</div>

      <div className="login-body">
        <form action="" method="post" className="login-form-wrapper">
          <div className="login-rows">
            <label htmlFor="email">email</label>
            <input type="email" id="email" placeholder="email/username" />
          </div>

          <div className="login-rows">
            <label htmlFor="passowrd">passowrd</label>
            <input type="password" id="passowrd" placeholder="passowrd" />
          </div>

          <div className="login-rows">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>

      <div className="login-footer">
        dont have an account? &nbsp; <Link to="/signup">create account</Link>
      </div>
    </div>
  );
};

export default Login;
