import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import axios from "axios";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== cPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("localhost://5000/api/users/register", {
        firstName: firstName,
        lastName: lastName,
        state: state,
        city: city,
        email: email,
        password: password,
      });

      setSuccess(response.data.message);
    } catch (error) {}
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-heading">signup</div>
      {error}
      <div className="signup-body">
        <form
          action=""
          method="post"
          className="signup-form-wrapper"
          onSubmit={handleSignUp}
        >
          <div className="signup-rows">
            <label htmlFor="firstname">First name</label>
            <input
              type="text"
              id="firstname"
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="signup-rows">
            <label htmlFor="lastname">Last name</label>
            <input
              type="text"
              id="lastname"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* <div className="signup-rows">
           
            <span>
              Gender:
              <label htmlFor="male">
                <input type="radio" name="gender" id="male" />
                male
              </label>
              <label htmlFor="female">
                <input type="radio" name="gender" id="female" />
                female
              </label>
            </span>
          </div> */}

          {/* <div className="signup-rows">
            <label htmlFor="dateOfBirth">date of birth</label>
            <input type="date" id="dateOfBirth" />
          </div> */}

          {/* <div className="signup-rows">
            <label htmlFor="country">Country</label>
            <input type="text" id="country" placeholder="Country" />
          </div> */}

          <div className="signup-rows">
            <label htmlFor="state">state</label>
            <input
              type="text"
              placeholder="State"
              onChange={(e) => setState(e.target.value)}
            />
          </div>

          <div className="signup-rows">
            <label htmlFor="city">city</label>
            <input
              type="text"
              placeholder="city"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          {/* <div className="signup-rows">
            <label htmlFor="username">username</label>
            <input type="text" id="username" placeholder="username" />
          </div> */}

          <div className="signup-rows">
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* <div className="signup-rows">
            <label htmlFor="phone">phone</label>
            <input type="text" id="phone" placeholder="phone" />
          </div> */}

          <div className="signup-rows">
            <label htmlFor="passowrd">passowrd</label>
            <input
              type="password"
              id="passowrd"
              placeholder="passowrd"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="signup-rows">
            <label htmlFor="cPassowrd">confirm passowrd</label>
            <input
              type="password"
              id="cPassowrd"
              placeholder="confirm passowrd"
              onChange={(e) => setCPassword(e.target.value)}
            />
          </div>

          <div className="signup-rows">
            <label htmlFor="termsAndConditions">
              <input type="checkbox" id="termsAndConditions" required /> by
              signing up, you agree to our terms and condtions
            </label>
          </div>

          <div className="signup-rows">
            <button type="submit">register</button>
          </div>
        </form>
      </div>

      <div className="signup-footer">
        already have an account<Link to="/login">login here</Link>
      </div>
    </div>
  );
};

export default Signup;
