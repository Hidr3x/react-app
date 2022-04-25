import React from "react";
import Myposts from "./Myposts/Myposts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg"
          alt="nature">
          </img>
      </div>
      <div className={s.avatar}>ava + description</div>
      <Myposts name="My posts" />
    </div>
  );
};

export default Profile;
