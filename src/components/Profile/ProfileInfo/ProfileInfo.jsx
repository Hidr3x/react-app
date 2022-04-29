import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img 
          src="https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg"
          alt="nature" 
        ></img>
      </div>
      <div className={s.description}>ava + description</div>
      </div>
  );
};

export default ProfileInfo;
