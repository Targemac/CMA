import React from "react";
import { Link } from "react-router-dom";

const ProfileCol2Sub2 = () => {
  return (
    <div className="profile-col-2-sub-2">
      <div className="contact-box">
        <div className="contact-box-item">John </div>
        <div className="contact-box-item">Olatunji</div>
        <div className="contact-box-item">olaj@gmail.com</div>
        <div className="contact-box-item">08069354714</div>
        <div className="contact-box-action-grp">
          <div className="edit-btn">
            <Link to="/contact/edit">Edit</Link>
          </div>
          <div className="delete-btn">
            <Link to="/contact/delete">Delete</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCol2Sub2;
