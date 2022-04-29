import React from "react";
import Myposts from "./Myposts/Myposts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <Myposts name="My posts" />
    </div>
  );
};

export default Profile;
