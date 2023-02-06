import React from "react";
import "./DeleteProfile.css";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft, FaUserShield } from "react-icons/fa";

const DeleteProfile = () => {
  return (
    <div className="page-wrapper">
      <div className="page-section">
        <div className="page-row-1">
          <div className="page-row-1-a">
            <FaUserShield /> Delete Account
          </div>
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
                  <label htmlFor="currentPassword">Current Password</label>
                  <input
                    type="password"
                    id="currentPassword"
                    placeholder="Current password"
                  />
                </div>

                <div className="signup-rows">
                  <button type="submit">Confirm Delete Account</button>
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

export default DeleteProfile;
