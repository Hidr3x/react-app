import React from "react";
import Myposts from "./Myposts/Myposts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg" alt = "nature"/>
      </div>
      <div>ava + description</div>
      <Myposts />
    </div>
  );
};

export default Profile;
