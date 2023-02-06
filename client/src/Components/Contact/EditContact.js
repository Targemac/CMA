import React from "react";
import "./EditContact.css";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const EditContact = () => {
  return (
    <div className="page-wrapper">
      <form action="" method="post">
        <div className="page-section">
          <div className="page-row-1">
            <div className="page-row-1-a">Edit contact</div>
            <div className="page-row-1-b">
              <Link to="/profile">
                <FaRegArrowAltCircleLeft className="remove-padd" /> Back
              </Link>
            </div>
          </div>
          <div className="page-row-2">
            {/* ----add-contact start here----- */}
            <div className="add-contact-wrapper">
              <div className="input-grp">
                <input type="text" placeholder="first name" />
                <input type="text" placeholder="last name" />
              </div>
              <div className="input-grp">
                <input type="text" placeholder="phone" />
                <input type="email" placeholder="email" />
              </div>
              <div className="input-grp">
                <select name="" id="">
                  <option value="">Occupation</option>
                </select>
              </div>
            </div>
            {/* ----add-contact ends here----- */}
          </div>
          <div className="page-row-3">
            <div className="page-row-3-a">
              <Link to="/profile">Cancel</Link>
            </div>
            <div className="page-row-3-b">
              <input type="submit" value="Update" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditContact;
