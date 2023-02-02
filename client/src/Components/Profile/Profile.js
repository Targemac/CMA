import React from "react";
import "./Profile.css";
import userPhoto from "../../assets/images/users/user-photo.jpg";
import { Link } from "react-router-dom";
import { FaSearchLocation } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="profile-wrapper">
      <div className="profile-col-1">
        <div className="profile-col-1-sub-1">
          <div className="profile-photo-round">
            <img src={userPhoto} alt="User" />
          </div>
        </div>
        <div className="profile-col-1-sub-2">
          first last bekky ademoladun philomina kenny
        </div>
        <div className="profile-col-1-sub-3">last seen 2/2/2023 03-31-57pm</div>
        <div className="profile-col-1-sub-4">
          <Link to="/profile/settings">Settings</Link>
          <Link to="">Logout</Link>
        </div>
      </div>

      <div className="profile-col-2">
        <div className="profile-col-2-sub-1">
          <div className="search-box">
            <form action="" method="get">
              <span className="search-box-grp">
                <FaSearchLocation className="searchIcon" />
                <input type="search" placeholder="Search Contacts" />
              </span>
            </form>
          </div>
          <div className="number-of-contact-box">108 Contacts</div>
          <div className="add-contact-box">
            <Link to="/add-contact">Add Contact</Link>
          </div>
        </div>

        <div className="profile-col-2-sub-2">
          <div className="contact-box">
            <div className="contact-box-item">contact-box-item</div>
            <div className="contact-box-item">contact-box-item</div>
            <div className="contact-box-item">contact-box-item</div>
            <div className="contact-box-item">contact-box-item</div>
            <div className="contact-box-action-grp">
              <div className="edit-btn">edit-btn</div>
              <div className="delete-btn">delete-btn</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
