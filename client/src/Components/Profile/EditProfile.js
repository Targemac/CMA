import React from "react";
import "./EditProfile.css";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft, FaUserEdit } from "react-icons/fa";

const EditProfile = () => {
  return (
    <div className="page-wrapper">
      <div className="page-section">
        <div className="page-row-1">
          <div className="page-row-1-a"> <FaUserEdit/> Update Profile</div>
          <div className="page-row-1-b">
            <Link to="/profile/settings">
              <FaRegArrowAltCircleLeft className="remove-padd" /> Back
            </Link>
          </div>
        </div>
        <div className="page-row-2">
          {/* start of edit profile  */}
          <div className="edit-profile-wrapper">
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
                      <input type="radio" name="gender" id="male" disabled />
                      male
                    </label>
                    <label htmlFor="female">
                      <input type="radio" name="gender" id="female" disabled />
                      female
                    </label>
                  </span>
                </div>

                <div className="signup-rows">
                  <label htmlFor="dateOfBirth">date of birth</label>
                  <input type="date" id="dateOfBirth" disabled />
                </div>

                <div className="signup-rows">
                  <label htmlFor="country">Country</label>
                  <select name="" id="country" disabled>
                    <option value="">Country</option>
                  </select>
                </div>

                <div className="signup-rows">
                  <label htmlFor="state">state</label>
                  <select name="" id="state" disabled>
                    <option value="">State</option>
                  </select>
                </div>

                <div className="signup-rows">
                  <label htmlFor="country">city</label>
                  <select name="" id="city" disabled>
                    <option value="">City</option>
                  </select>
                </div>

                <div className="signup-rows">
                  <label htmlFor="username">username</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="username"
                    disabled
                  />
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
                  <button type="submit">Update Profile</button>
                </div>
              </form>
            </div>
          </div>
          {/* end of edit profile  */}
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
