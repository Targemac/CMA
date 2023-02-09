import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Profile.css";
import userPhoto from "../../assets/images/users/user-photo.jpg";
import ProfileCol1 from "./ProfileCol1";
import ProfileCol2 from "./ProfileCol2";
import fakeUsers from "./fakeUsers";
import fakeContacts from "./FakeContacts";

const Profile = () => {
  const { id } = useParams();

  const [userDetails, setUserDetails] = useState({
    photo: "",
    firstname: "dave",
    lastname: "",
    lastseen: "",
  });

  useEffect(() => {
    try {
      // GET: localhost:5000/api/users
      const foundUser = fakeUsers.filter((user) => user.id.toString() === id);
      setUserDetails({
        photo: foundUser.photo,
        firstname: foundUser.firstName,
        lastname: foundUser.lastName,
        lastseen: foundUser.lastSeen,
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  console.log(userDetails.firstname);

  return (
    <div className="profile-wrapper">
      <ProfileCol1 userPhoto={userPhoto} userDetails={userDetails} />
      <ProfileCol2 />
    </div>
  );
};

export default Profile;
