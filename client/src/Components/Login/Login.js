import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [error, setError] = useState();

  const navigate = useNavigate();

  const HandleLogin = (e) => {
    e.preventDefault();
    console.log("starting login--------------");
  };

  return (
    <div className="login-wrapper">
      <div className="login-heading">Login</div>
      <span style={{ color: "red", fontSize: "12px" }}> {error} </span>

      <div className="login-body">
        <form
          action=""
          method="post"
          className="login-form-wrapper"
          onSubmit={HandleLogin}
        >
          <div className="login-rows">
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              placeholder="email/username"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="login-rows">
            <label htmlFor="passowrd">passowrd</label>
            <input
              type="password"
              id="passowrd"
              placeholder="passowrd"
              onChange={(e) => setPassword(e.target.value)}
            />
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
