import React from "react";
import { Link } from "react-router-dom";
import { FaSearchLocation } from "react-icons/fa";
import ProfileCol2Sub2 from "./ProfileCol2Sub2";

const ProfileCol2 = () => {
  return (
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

      <ProfileCol2Sub2 />
    </div>
  );
};

export default ProfileCol2;
