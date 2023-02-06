import React from "react";
import "./ChangePassword.css";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft, FaUserLock } from "react-icons/fa";

const ChangePassword = () => {
  return (
    <div className="page-wrapper">
      <div className="page-section">
        <div className="page-row-1">
          <div className="page-row-1-a"> <FaUserLock/> Change Passsword</div>
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
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    type="password"
                    id="newPassword"
                    placeholder="New password"
                  />
                </div>
                <div className="signup-rows">
                  <label htmlFor="confirmNewPassword">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="confirmNewPassword"
                    placeholder="Confirm New password"
                  />
                </div>

                <div className="signup-rows">
                  <button type="submit">Update Password</button>
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

export default ChangePassword;
