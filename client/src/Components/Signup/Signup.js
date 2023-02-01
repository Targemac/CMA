import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-wrapper">
      <div className="signup-heading">signup</div>

      <div className="signup-body">
        <form action="" method="post" className="signup-form-wrapper">
          <div className="signup-rows">
            <label htmlFor="firstname">First name</label>
            <input type="text" id="firstname" placeholder="First name" />
          </div>

          <div className="signup-rows">
            <label htmlFor="lastname">Last name</label>
            <input type="text" id="lastname" placeholder="Last name" />
          </div>

          <div className="signup-rows">
            {/* <label htmlFor="">gender</label> */}
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
          </div>

          <div className="signup-rows">
            <label htmlFor="dateOfBirth">date of birth</label>
            <input type="date" id="dateOfBirth" />
          </div>

          <div className="signup-rows">
            <label htmlFor="country">Country</label>
            <select name="" id="country">
              <option value="">Country</option>
            </select>
          </div>

          <div className="signup-rows">
            <label htmlFor="state">state</label>
            <select name="" id="state">
              <option value="">State</option>
            </select>
          </div>

          <div className="signup-rows">
            <label htmlFor="country">city</label>
            <select name="" id="city">
              <option value="">City</option>
            </select>
          </div>

          <div className="signup-rows">
            <label htmlFor="username">username</label>
            <input type="text" id="username" placeholder="username" />
          </div>

          <div className="signup-rows">
            <label htmlFor="email">email</label>
            <input type="email" id="email" placeholder="email" />
          </div>

          <div className="signup-rows">
            <label htmlFor="phone">phone</label>
            <input type="text" id="phone" placeholder="phone" />
          </div>

          <div className="signup-rows">
            <label htmlFor="passowrd">passowrd</label>
            <input type="password" id="passowrd" placeholder="passowrd" />
          </div>

          <div className="signup-rows">
            <label htmlFor="cPassowrd">confirm passowrd</label>
            <input
              type="password"
              id="cPassowrd"
              placeholder="confirm passowrd"
            />
          </div>

          <div className="signup-rows">
            <label htmlFor="termsAndConditions">
              <input type="checkbox" id="termsAndConditions" /> by signing up,
              you agree to our terms and condtions
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
