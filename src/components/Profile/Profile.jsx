import React from "react";
import Myposts from "./Myposts/Myposts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <Myposts
        name="My posts"
        postsData={props.state.postsData}
        dispatch={props.dispatch}
        newPostText = {props.state.newPostText}
      />
    </div>
  );
};

export default Profile;
